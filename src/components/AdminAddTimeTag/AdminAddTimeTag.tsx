import React, { FormEvent, useRef } from 'react';
import { Button, FormControl, FormLabel, Heading, Input, Select } from '@chakra-ui/react';
import axios from 'axios';
import { headers, TIME_TAGS } from '../../constants/api';

interface AdminAddTimeTagProps {
  getTimeTags: () => void;
}

const Years: { [year: string]: number } = {
  1993: 0,
  1994: 1,
  1995: 2,
  1996: 3,
  1997: 4,
  1998: 5,
  1999: 6,
  2000: 7,
  2001: 8,
  2002: 9,
  2003: 10,
  2004: 11,
  2005: 12,
  2006: 13,
  2007: 14,
  2008: 15,
  2009: 16,
  2010: 17,
  2011: 18,
  2012: 19,
  2013: 20,
  2014: 21,
  2015: 22,
  2016: 23,
  2017: 24,
  2018: 25,
  2019: 26,
  2020: 27,
  2021: 28,
};

const AdminAddTimeTag = ({ getTimeTags }: AdminAddTimeTagProps) => {
  const colorRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const color = colorRef?.current?.value;
    const year = yearRef?.current?.value;

    const res = await axios
      .post(TIME_TAGS, { name: `${year}_${Years[`${year}`]}let`, color, year, dateTag: true }, { headers: headers })
      .catch((e) => console.log(JSON.stringify(e)));

    console.log('res ', JSON.stringify(res));

    resetForm();
    getTimeTags();
  };

  const resetForm = () => {
    return (document.getElementById('form') as HTMLFormElement).reset();
  };

  console.log('🚀 ~ file: AdminAddTimeTag.tsx ~ line 63 ~ AdminAddTimeTag ~ years', Years);

  const yearsOptions = Object.keys(Years).map((year) => {
    console.log('🚀 ~ file: AdminAddTimeTag.tsx ~ line 74 ~ yearsOptions ~ year', year);
    return (
      <option key={year} value={year}>
        {`${year}_${Years[`${year}`]}let`}
      </option>
    );
  });

  return (
    <>
      <Heading as="h5" my={4} textDecoration="none">
        Time TAG
      </Heading>
      <form onSubmit={handleSubmit} id="form">
        <FormControl id="color" isRequired mb={4}>
          <FormLabel>Barva (hex)</FormLabel>
          <Input ref={colorRef} placeholder="4287f5" />
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel>Datum</FormLabel>
          <Select id="year" ref={yearRef} placeholder="Select option">
            {yearsOptions}
          </Select>
        </FormControl>

        <Button type="submit" mb={4} colorScheme="green">
          Přidat time TAG
        </Button>
      </form>
    </>
  );
};

export default AdminAddTimeTag;

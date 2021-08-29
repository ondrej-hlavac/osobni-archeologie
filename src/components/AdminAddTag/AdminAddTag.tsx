import React, { FormEvent, useRef } from 'react';
import { Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import axios from 'axios';
import { headers, TAGS } from '../../constants/api';

interface AdminAddTagProps {
  getTags: () => void;
}

const AdminAddTag = ({ getTags }: AdminAddTagProps) => {
  const labelRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const label = labelRef?.current?.value;
    const color = colorRef?.current?.value;

    const res = await axios.post(TAGS, { name: label, color }, { headers: headers }).catch((e) => console.log(JSON.stringify(e)));

    console.log('create tag data: ', res);
    resetForm();
    getTags();
  };

  const resetForm = () => {
    return (document.getElementById('form') as HTMLFormElement).reset();
  };

  return (
    <>
      <Heading as="h5" mb={4} textDecoration="none">
        Basic TAG
      </Heading>
      <form onSubmit={handleSubmit} id="form-basic-tag">
        <FormControl id="label" isRequired mb={4}>
          <FormLabel>label</FormLabel>
          <Input ref={labelRef} placeholder="od starýho" />
        </FormControl>
        <FormControl id="color-basic-tag" isRequired mb={4}>
          <FormLabel>Barva (hex)</FormLabel>
          <Input ref={colorRef} placeholder="4287f5" />
        </FormControl>
        <Button type="submit" mb={4} colorScheme="green" variant="outline">
          Přidat TAG
        </Button>
      </form>
    </>
  );
};

export default AdminAddTag;

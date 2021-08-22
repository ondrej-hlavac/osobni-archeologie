import React, { FormEvent, useRef } from 'react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
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

    console.log('🚀 ~ file: AdminAddTag.tsx ~ line 12 ~ handleSubmit ~ color', label, color);
    const res = await axios.post(TAGS, { name: label, color }, { headers: headers }).catch((e) => console.log(JSON.stringify(e)));

    console.log('res ', JSON.stringify(res));

    resetForm();
    getTags();
  };

  const resetForm = () => {
    return (document.getElementById('form') as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <FormControl id="label" isRequired mb={4}>
        <FormLabel>label</FormLabel>
        <Input ref={labelRef} placeholder="od starýho" />
      </FormControl>
      <FormControl id="color" isRequired mb={4}>
        <FormLabel>Barva (hex)</FormLabel>
        <Input ref={colorRef} placeholder="4287f5" />
      </FormControl>
      <Button type="submit" mb={4}>
        Uložit
      </Button>
    </form>
  );
};

export default AdminAddTag;

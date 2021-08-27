import React, { useEffect, useState } from 'react';
import { Button, Divider, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import axios from 'axios';
import { headers, TAGS, TIME_TAGS, FINDINGS } from '../../constants/api';
import SelectedTag from './components/SelectedTag';
import SelectTag from './components/SelectTag';
import AddImage from './components/AddImageInput/components/AddImageDropZone';
import AddImageInput from './components/AddImageInput';

interface AdminAddFormProps {
  hideForm: () => void;
}

interface FormData {
  name: string;
  basicTagId: string;
  timeTagId: string;
}

const defaultState = {
  name: '',
  basicTagId: '',
  timeTagId: '',
};

const AdminAddForm = ({ hideForm }: AdminAddFormProps) => {
  const [formData, setFormData] = useState(defaultState as FormData);
  const [tags, setTags] = useState([] as any);
  const [timeTags, setTimeTags] = useState([] as any);

  const updateForm = (data: { [k: string]: string }) => {
    return setFormData({ ...formData, ...data });
  };

  const { name, basicTagId, timeTagId } = formData;

  const getTags = async () => {
    const res = await axios.get<any>(TAGS, { headers: headers }).catch((e) => console.log(JSON.stringify(e)));
    if (res) {
      setTags(res.data);
    }
  };

  const getTimeTags = async () => {
    const res = await axios.get<any>(TIME_TAGS, { headers: headers }).catch((e) => console.log(JSON.stringify(e)));
    if (res) {
      setTimeTags(res.data);
    }
  };

  const handleSelectTag = (tagId: string) => {
    updateForm({ basicTagId: tagId });
  };

  const handleSelectTimeTag = (tagId: string) => {
    updateForm({ timeTagId: tagId });
  };

  const handleSubmitForm = async () => {
    const res = await axios.post(FINDINGS, formData, { headers: headers }).catch((e) => console.log(JSON.stringify(e)));
    if (res) {
      hideForm();
      setFormData(defaultState);
    }
  };

  useEffect(() => {
    getTags();
    getTimeTags();
  }, []);

  return (
    <Flex direction="column" position="relative" mx={2} p={2} pt={20} mt={25} mb={4} border="1px solid gray" borderRadius={8}>
      <Button onClick={hideForm} position="absolute" top={8} right={8} colorScheme="red">
        close
      </Button>
      <Heading as="h5">Nový archeologický nález</Heading>
      <Divider my={8} />

      {/* ADD IMAGE */}
      <AddImageInput />
      <Divider my={8} />

      {/* FINDING NAME */}
      <FormControl id="name">
        <FormLabel>Název</FormLabel>
        <Input
          name="name"
          placeholder="Název"
          onChange={(e) => {
            updateForm({ name: e.target.value });
          }}
          value={name}
          required
        />
        <FormHelperText>Na webu není vidět, ale lze podle něj filtrovat.</FormHelperText>
      </FormControl>
      <Divider my={8} />

      {/* ADD BASIC TAG */}
      <Text>zvolený basic tag</Text>
      <SelectedTag tags={tags} tagId={basicTagId} />
      <Text mt={1}>dostupné basic tags</Text>
      <SelectTag tags={tags} tagId={basicTagId} handleTagSelect={handleSelectTag} />
      <Divider my={8} />

      {/* ADD TIME TAG */}
      <Text>zvolený time tag</Text>
      <SelectedTag tags={timeTags} tagId={timeTagId} />
      <Text mt={1}>dostupné time tags</Text>
      <SelectTag tags={timeTags} tagId={timeTagId} handleTagSelect={handleSelectTimeTag} />

      {/* ADD 3D SCAN */}
      <Divider my={8} />
      <Text>add 3d sken</Text>
      <Divider my={8} />

      {/* SUBMIT */}
      <Button colorScheme="teal" onClick={handleSubmitForm}>
        NAHRáT
      </Button>
    </Flex>
  );
};

export default AdminAddForm;

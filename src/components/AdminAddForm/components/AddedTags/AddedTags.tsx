import { Wrap } from '@chakra-ui/react';
import React from 'react';
import Tag from '../../../Tag';

const AddedTags = () => {
  return (
    <Wrap mb={8}>
      <Tag color="teal" />
      <Tag color="teal" link />
      <Tag color="teal" />
      <Tag color="teal" />
      <Tag color="teal" />
    </Wrap>
  );
};

export default AddedTags;

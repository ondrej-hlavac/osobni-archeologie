import { Wrap } from '@chakra-ui/react';
import React from 'react';
// import { Flex } from '@chakra-ui/react';
import Tag from '../../../Tag';

interface SelectedTagProps {
  tags: any;
  tagId: string;
}

const SelectedTag = ({ tags, tagId }: SelectedTagProps) => {
  return (
    <Wrap minH={90}>
      {tags.data?.map((tag: any) => {
        if (tag.ref['@ref'].id === tagId) {
          return <Tag color={`#${tag.data.color}`} key={tag.data.name} label={tag.data.name} />;
        }
      })}
    </Wrap>
  );
};

export default SelectedTag;

import React from 'react';
import { Wrap } from '@chakra-ui/react';
import Tag from '../../../Tag';

interface SelectTagProps {
  tags: any;
  tagId: string;
  // eslint-disable-next-line no-unused-vars
  handleTagSelect: (tagId: string) => void;
}

const SelectTag = ({ tags, tagId, handleTagSelect }: SelectTagProps) => {
  return (
    <Wrap minH={90}>
      {tags.data?.map((tag: any) => {
        if (tag.ref['@ref'].id !== tagId) {
          return (
            <Tag
              color={`#${tag.data.color}`}
              key={tag.data.name}
              label={tag.data.name}
              onClick={() => handleTagSelect(tag.ref['@ref'].id)}
            />
          );
        }
      })}
    </Wrap>
  );
};

export default SelectTag;

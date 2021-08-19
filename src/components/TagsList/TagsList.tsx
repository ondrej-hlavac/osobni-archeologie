import React from 'react';
import { Wrap } from '@chakra-ui/react';
import Tag from '../Tag';
import { routes } from '../../constants/routes';

const TagsList = ({ tags }: any) => {
  console.log('tags list', tags);

  if (!tags) {
    return null;
  }

  return (
    <Wrap my={8}>
      {tags.data?.map((tag: any) => {
        return <Tag color={`#${tag.data.color}`} key={tag.data.name} link path={routes.HOME} label={tag.data.name} />;
      })}
    </Wrap>
  );
};

export default TagsList;

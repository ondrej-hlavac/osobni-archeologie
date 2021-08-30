import React from 'react';
import { Flex, Heading, Wrap } from '@chakra-ui/react';
import Tag from '../Tag';
import { routes } from '../../constants/routes';
// import { routes } from '../../constants/routes';

const TagsList = ({ tags, headline, link = false }: any) => {
  if (!tags) {
    console.log('return null');
    return null;
  }

  return (
    <>
      {headline && (
        <Heading fontSize="16px" textDecoration="none" as="h3" mt={4}>
          {headline}
        </Heading>
      )}
      <Flex my={8} alignItems="flex-start" width="100%" textAlign="left">
        {tags.data?.map((tag: any, index: number) => {
          return (
            <Tag
              color={`#${tag.data.color}`}
              link={link ? `${routes.HOME}?tag=${tag?.ref?.['@ref']?.id}` : undefined}
              key={`key_${tag.data.name}${index}`}
              label={tag.data.name}
            />
          );
        })}
      </Flex>
    </>
  );
};

export default TagsList;

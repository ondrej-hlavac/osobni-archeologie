import React from 'react';
import { Button, Flex, Heading, Image } from '@chakra-ui/react';
import Tag from '../../../Tag';

interface AdminListItemProps {
  imageUrl: string;
  findingData: any;
  basicTag: any;
  timeTag: any;
}

const AdminListItem = ({ imageUrl, basicTag, findingData, timeTag }: AdminListItemProps) => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} mb={2} justifyContent="space-between" border="1px solid gray" borderRadius={8} p={4}>
      <Image src={imageUrl ? imageUrl : 'https://fakeimg.pl/250x100/'} maxW="250px" />
      <Flex direction="column" flexGrow={1} ml={4} alignItems="flex-start">
        <Heading as="h6">{findingData.name}</Heading>
        <Tag color={`#${basicTag.color}`} label={basicTag.name} />
        <Tag color={`#${timeTag.color}`} label={timeTag.name} />
      </Flex>
      <Flex direction="column" justifyContent="space-between">
        <Button color="cyan.400" disabled>
          Edit
        </Button>
        <Button color="red.300" disabled>
          Delete
        </Button>
      </Flex>
    </Flex>
  );
};

export default AdminListItem;

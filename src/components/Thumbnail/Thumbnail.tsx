import React from 'react';
import { Box, Image, Link, Flex } from '@chakra-ui/react';
import { routes } from '../../constants/routes';
import Tag from '../Tag';

interface IProps {
  imageUrl: string;
  findingData: any;
  basicTag: any;
  timeTag: any;
}

const Thumbnail = ({ imageUrl, basicTag, timeTag }: IProps) => {
  return (
    <Box border="1px solid rgba(0,0,0,0.4)" p={0} position="relative">
      <Link
        href={routes.DETAIL}
        position="relative"
        display="block"
        m={0}
        _after={{ content: `""`, display: 'block', width: '100%', padding: '0', paddingTop: '100%' }}
      >
        <Image position="absolute" width="100%" src={imageUrl} objectFit="contain" objectPosition="50% 50%" alt="placeholder" m="auto" />
      </Link>
      <Flex padding={2} position="absolute" bottom="0" left="0" right="0" backgroundColor="#ffffff83" zIndex={99}>
        <Tag color={`#${basicTag.color}`} label={basicTag.name} />
        <Tag color={`#${timeTag.color}`} label={timeTag.name} />
      </Flex>
    </Box>
  );
};

export default Thumbnail;

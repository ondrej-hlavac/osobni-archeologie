import React, { useEffect, useState } from 'react';
import { Divider, Flex } from '@chakra-ui/react';
import TagsList from '../TagsList';
import axios from 'axios';
import { headers, TAGS, TIME_TAGS } from '../../constants/api';
import { routes } from '../../constants/routes';

const TagsMenu = () => {
  const [tags, setTags] = useState([] as any);
  const [timeTags, setTimeTags] = useState([] as any);

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

  useEffect(() => {
    getTags();
    getTimeTags();
  }, []);

  return (
    <Flex spacing={6} flexWrap="wrap" justifyContent="center">
      <TagsList tags={tags} link={routes.DETAIL} />
      <Divider color="black" my={1} />
      <TagsList tags={timeTags} link={routes.DETAIL} />
    </Flex>
  );
};

export default TagsMenu;

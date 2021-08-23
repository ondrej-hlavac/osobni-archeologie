import React, { useEffect, useState } from 'react';
import { Divider, Flex } from '@chakra-ui/react';
import TagsList from '../TagsList';
import AdminAddTag from '../AdminAddTag';
import axios from 'axios';
import { headers, TAGS, TIME_TAGS } from '../../constants/api';
import AdminAddTimeTag from '../AdminAddTimeTag';

const AdminTags = () => {
  const [tags, setTags] = useState([] as any);
  const [timeTags, setTimeTags] = useState([] as any);

  const getTags = async () => {
    const res = await axios.get<any>(TAGS, { headers: headers }).catch((e) => console.log(JSON.stringify(e)));
    if (res) {
      setTags(res.data);
    }
    console.log(JSON.stringify(res));
  };

  const getTimeTags = async () => {
    const res = await axios.get<any>(TIME_TAGS, { headers: headers }).catch((e) => console.log(JSON.stringify(e)));
    if (res) {
      setTimeTags(res.data);
    }
    console.log(JSON.stringify(res));
  };

  useEffect(() => {
    getTags();
    getTimeTags();
  }, []);

  return (
    <Flex direction="column" pb={40} minH={'100vh'}>
      <Divider my={4} />
      <AdminAddTag getTags={getTags} />
      <TagsList tags={tags} headline="existující basic TAGs" />
      <Divider my={4} />
      <AdminAddTimeTag getTimeTags={getTimeTags} />
      <TagsList tags={timeTags} headline="existující time TAGs" />
      <Divider my={4} />
    </Flex>
  );
};

export default AdminTags;

import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import TagsList from '../TagsList';
import AdminAddTag from '../AdminAddTag';
import axios from 'axios';
import { headers, TAGS } from '../../constants/api';

const AdminTags = () => {
  const [tags, setTags] = useState([] as any);

  const getTags = async () => {
    const res = await axios.get<any>(TAGS, { headers: headers }).catch((e) => console.log(JSON.stringify(e)));
    if (res) {
      setTags(res.data);
    }
    console.log(JSON.stringify(res));
  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <Flex direction="column" pb={40} minH={'100vh'}>
      <AdminAddTag />
      <TagsList tags={tags} />
    </Flex>
  );
};

export default AdminTags;

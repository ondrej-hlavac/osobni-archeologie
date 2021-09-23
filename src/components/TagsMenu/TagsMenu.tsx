import React, { useEffect, useState } from 'react';
import { Divider, Flex, Heading } from '@chakra-ui/react';
import TagsList from '../TagsList';
import axios from 'axios';
import { headers, TAGS, TIME_TAGS } from '../../constants/api';
import { routes } from '../../constants/routes';
import { useQuery } from '../../utils/useQuery';
import Tag from '../Tag/Tag';

interface ITag {
  data: TagProps[];
  ref: any;
}

interface TagProps {
  data: {
    color: string;
    name: string;
  };
}

const TagsMenu = () => {
  const [tags, setTags] = useState({} as ITag);
  const [timeTags, setTimeTags] = useState({} as ITag);

  let query = useQuery();
  const filterQuery = query.get('tag');

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
  }, [filterQuery]);

  if (filterQuery?.length && tags?.data?.length && timeTags?.data?.length) {
    const allTags = tags.data.concat(timeTags.data);
    const filteredTag: TagProps[] = allTags.filter((tag: any) => {
      return tag?.ref?.['@ref'].id === filterQuery;
    });

    return (
      <Flex>
        <span>selected tag:</span>
        <Tag color={`#${filteredTag[0]?.data?.color}`} label={filteredTag[0]?.data.name} link={`${routes.HOME}`} />
      </Flex>
    );
  }

  return (
    <Flex spacing={6} flexWrap="wrap" justifyContent="center">
      <TagsList tags={tags} link={routes.DETAIL} headline="ORIGIN" />
      <Divider color="black" my={1} />
      <TagsList tags={timeTags} link={routes.DETAIL} headline="YEAR / AGE" />
    </Flex>
  );
};

export default TagsMenu;

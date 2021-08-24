import React, { useEffect, useState } from 'react';
import { Divider, Flex, Heading } from '@chakra-ui/react';
import AdminListItem from './components/AdminListItem';
import { FINDINGS, headers } from '../../constants/api';
import drivko from '../../assets/images/placeholders/drivko.png';
import axios from 'axios';

const AdminList = () => {
  const [findings, setFindings] = useState([] as any[]);

  const getFindings = async () => {
    const res = await axios.get<any>(FINDINGS, { headers: headers }).catch((e) => console.log(JSON.stringify(e)));
    if (res) {
      setFindings(res?.data?.data);
    }
  };

  useEffect(() => {
    getFindings();
  }, []);

  return (
    <Flex direction="column" pb={40}>
      <Divider my={8} />

      <Heading as="h4" mb={4}>
        Seznam přidaných nálezů
      </Heading>

      {findings.length &&
        findings.map((finding: any) => {
          const { findingDoc, basicTag, timeTag } = finding;
          return (
            <AdminListItem
              key={findingDoc.ref['@ref'].id}
              findingData={findingDoc.data}
              basicTag={basicTag.data}
              timeTag={timeTag.data}
              imageUrl={drivko}
            />
          );
        })}
    </Flex>
  );
};

export default AdminList;

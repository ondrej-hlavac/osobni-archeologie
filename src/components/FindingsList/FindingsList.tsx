import React, { useEffect, useState } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';

import Thumbnail from '../Thumbnail';
import drivko from '../../assets/images/placeholders/drivko.png';
// import pepsi_2 from '../../assets/images/placeholders/pepsi_2.png';
// import naramek from '../../assets/images/placeholders/naramek.png';
// import whiskey from '../../assets/images/placeholders/drivko.png';
import { FINDINGS, headers } from '../../constants/api';

const FindingsList = () => {
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
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={0}>
      {findings.length &&
        findings.map((finding: any) => {
          const { findingDoc, basicTag, timeTag } = finding;
          return (
            <Thumbnail
              key={findingDoc.ref['@ref'].id}
              findingData={findingDoc}
              basicTag={basicTag.data}
              timeTag={timeTag.data}
              imageUrl={findingDoc.data.image_url || drivko}
            />
          );
        })}
    </SimpleGrid>
  );
};

export default FindingsList;

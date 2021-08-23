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
    console.log('finding > ', JSON.stringify(res?.data?.data));
  };

  useEffect(() => {
    getFindings();
  }, []);

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={0}>
      {findings.length &&
        findings.map((finding: any) => {
          console.log('🚀 ~ file: FindingsList.tsx ~ line 31 ~ findings.map ~ finding', JSON.stringify(finding));
          const { data } = finding;
          console.log('finding MAPA', JSON.stringify(finding.data));
          return <Thumbnail key={data.id} findingData={data} imageUrl={drivko} />;
        })}
    </SimpleGrid>
  );
};

export default FindingsList;

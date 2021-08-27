import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
// import faunadb from 'faunadb';
import { FINDING_IMAGE, imageHeaders } from '../../../../constants/api';
import AddImageDropZone from './components/AddImageDropZone';

enum UploadStatus {
  WAITING_FOR_FILE = 'WAITING_FOR_FILE',
  UPLOADING_FILE = 'UPLOADING_FILE',
  WAITING_FOR_THUMBNAIL = 'WAITING_FOR_THUMBNAIL',
  DISPLAYING_THUMBNAIL = 'THUMBNAIL_READY',
}

interface PostImageReq {
  data: Array<{}>;
}

// const client = new faunadb.Client({
//   secret: process.env.FAUNADB_SECRET,
//   domain: 'db.eu.fauna.com',
//   scheme: 'https',
// });

const AddImageInput = () => {
  const [appState, setAppState] = useState<UploadStatus>(UploadStatus.WAITING_FOR_FILE);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  // console.log('🚀 ~ file: AddImageInput.tsx ~ line 15 ~ AddImageInput ~ appState', appState);

  let faunaStream: any;

  const initStream = (docuId: any) => {
    console.log('data', docuId);
    // if (faunaStream) faunaStream.destroy();
    // faunaStream = new FaunaStream(faunaClient, Ref(Collection('Images'), docuId));
    // this.faunaStream.initStream();

    // this.faunaStream.onUpdate.add((document) => {
    //   const status = document.data.status;
    //   const newState = { appState: AppStates[status] };

    //   if (document.data.thumbnailUrl) {
    //     newState.thumbnailUrl = document.data.thumbnailUrl;
    //   }

    //   this.setState(newState);
    // });
  };

  const onFileSelected = async (file: string) => {
    console.log('file main comp', file);

    // this.setState({appState: AppStates.UPLOADING_FILE});
    setAppState(UploadStatus.UPLOADING_FILE);

    const res = await fetch(FINDING_IMAGE, {
      method: 'POST',
      headers: imageHeaders,
      body: file,
    }).catch((e) => console.log(JSON.stringify(e)));
    console.log('🚀 ~ file: AddImageInput.tsx ~ line 35 ~ onFileSelected ~ res', res);
    // console.log('🚀 ~ file: AddImageInput.tsx ~ line 23 ~ onFileSelected ~ res', JSON.stringify(res));

    // const response = await fetch(FINDING_IMAGE, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/octet-stream',
    //   },
    //   body: file,
    // });

    if (res) {
      const responseBody = await res.json();

      initStream(responseBody.documentId);
    }
    // console.log('🚀 ~ file: AddImageInput.tsx ~ line 47 ~ onFileSelected ~ responseBody.documentId', JSON.stringify(responseBody));
    // this.initStream(responseBody.documentId);

    // const res = await axios.post(TAGS, { name: label, color }, { headers: headers }).catch((e) => console.log(JSON.stringify(e)));

    // const response = await fetch('/api/upload', {
    //   method: 'POST',
    //   headers: {
    //   	'content-type': 'application/octet-stream'
    //   },
    //   body: file
    // });

    // const responseBody = await response.json();
    // this.initStream(responseBody.documentId);
  };

  return (
    <>
      <AddImageDropZone onFileSelected={onFileSelected} />
    </>
  );
};

export default AddImageInput;

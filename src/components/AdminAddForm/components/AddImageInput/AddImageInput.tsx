import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import faunadb from 'faunadb';
import { FINDING_IMAGE, imageHeaders } from '../../../../constants/api';
import AddImageDropZone from './components/AddImageDropZone';
import { FaunaStream } from '../../../../utils/FaunaStream';
const { Ref, Collection } = faunadb.query;

enum UploadStatus {
  WAITING_FOR_FILE = 'WAITING_FOR_FILE',
  UPLOADING_FILE = 'UPLOADING_FILE',
  WAITING_FOR_THUMBNAIL = 'WAITING_FOR_THUMBNAIL',
  DISPLAYING_THUMBNAIL = 'THUMBNAIL_READY',
}

interface PostImageReq {
  data: Array<{}>;
}

const client = new faunadb.Client({
  // eslint-disable-next-line no-undef
  secret: process.env.REACT_APP_FAUNADB_SECRET!,
  domain: 'db.eu.fauna.com',
  scheme: 'https',
});

const AddImageInput = () => {
  const [uploadState, setUploadState] = useState<UploadStatus>(UploadStatus.WAITING_FOR_FILE);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  console.log('🚀 ~ file: AddImageInput.tsx ~ line 30 ~ AddImageInput ~ thumbnailUrl', thumbnailUrl, uploadState);

  let faunaStream: any;

  const initStream = (docuId: any) => {
    console.log('data', docuId);
    if (faunaStream) faunaStream.destroy();
    faunaStream = new FaunaStream(client, Ref(Collection('Images'), docuId));
    faunaStream.initStream();

    faunaStream.onUpdate.add((document: any) => {
      const status: keyof typeof UploadStatus = document.data.status;

      if (document.data.thumbnailUrl) {
        setThumbnailUrl(document.data.thumbnailUrl);
      }

      setUploadState(UploadStatus[status] as UploadStatus);
    });
  };

  const onFileSelected = async (file: string) => {
    console.log('file main comp', file);

    // this.setState({appState: AppStates.UPLOADING_FILE});
    setUploadState(UploadStatus.UPLOADING_FILE);

    const res = await fetch(FINDING_IMAGE, {
      method: 'POST',
      headers: imageHeaders,
      body: file,
    }).catch((e) => console.log(JSON.stringify(e)));
    console.log('🚀 ~ file: AddImageInput.tsx ~ line 35 ~ onFileSelected ~ res', res, file);

    if (res) {
      console.log('response after upload file', res);
      const responseBody = await res.json();

      initStream(responseBody.documentId);
    }
  };

  return (
    <>
      {uploadState === UploadStatus.WAITING_FOR_FILE && <AddImageDropZone onFileSelected={onFileSelected} />}
      {uploadState === UploadStatus.UPLOADING_FILE && <>uploading file</>}
      {uploadState === UploadStatus.WAITING_FOR_THUMBNAIL && <>WAITING_FOR_THUMBNAIL</>}
      {uploadState === UploadStatus.DISPLAYING_THUMBNAIL && <>DISPLAYING_THUMBNAIL</>}
    </>
  );
};

export default AddImageInput;

import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Image } from '@chakra-ui/react';
// import faunadb from 'faunadb';
import FormData from 'form-data';
import { FINDING_IMAGE, imageHeaders } from '../../../../constants/api';
import AddImageDropZone from './components/AddImageDropZone';

// import { FaunaStream } from '../../../../utils/FaunaStream';
// const { Ref, Collection } = faunadb.query;

enum UploadStatus {
  WAITING_FOR_FILE = 'WAITING_FOR_FILE',
  UPLOADING_FILE = 'UPLOADING_FILE',
  WAITING_FOR_THUMBNAIL = 'WAITING_FOR_THUMBNAIL',
  DISPLAYING_THUMBNAIL = 'THUMBNAIL_READY',
}

interface AddImageInputProps {
  updateForm: (data: any) => void;
}

// interface PostImageReq {
//   data: Array<{}>;
// }

// const client = new faunadb.Client({
//   // eslint-disable-next-line no-undef
//   secret: process.env.REACT_APP_FAUNADB_SECRET!,
//   domain: 'db.eu.fauna.com',
//   scheme: 'https',
// });

const AddImageInput = ({ updateForm }: AddImageInputProps) => {
  const [uploadState, setUploadState] = useState<UploadStatus>(UploadStatus.WAITING_FOR_FILE);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  console.log('🚀 ~ file: AddImageInput.tsx ~ line 30 ~ AddImageInput ~ thumbnailUrl', thumbnailUrl, uploadState);

  // let faunaStream: any;

  // const initStream = (docuId: any) => {
  //   console.log('data', docuId);
  //   if (faunaStream) faunaStream.destroy();
  //   faunaStream = new FaunaStream(client, Ref(Collection('images'), docuId));
  //   faunaStream.initStream();

  //   faunaStream.onUpdate.add((document: any) => {
  //     const status: keyof typeof UploadStatus = document.data.status;

  //     if (document.data.thumbnailUrl) {
  //       setThumbnailUrl(document.data.thumbnailUrl);
  //     }

  //     setUploadState(UploadStatus[status] as UploadStatus);
  //   });
  // };

  const onFileSelected = async (file: any) => {
    console.log('file main comp', file);

    // this.setState({appState: AppStates.UPLOADING_FILE});
    setUploadState(UploadStatus.UPLOADING_FILE);

    // const res = await fetch(FINDING_IMAGE, {
    //   method: 'POST',
    //   headers: imageHeaders,
    //   body: file,
    // }).catch((e) => console.log(JSON.stringify(e)));

    let data = new FormData();
    data.append('file', file, file.name);

    const res = await axios.post(FINDING_IMAGE, data, {
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data`,
      },
    });
    setUploadState(UploadStatus.WAITING_FOR_THUMBNAIL);

    console.log('🚀 ~ file: AddImageInput.tsx ~ line 35 ~ onFileSelected ~ res', res, file);

    if (res) {
      // console.log('response after upload file', res);
      const { data } = await res;
      console.log('🚀 ~ file: AddImageInput.tsx ~ line 77 ~ onFileSelected ~ responseBody', data.publicUrl);

      // initStream(responseBody.documentId);
      setThumbnailUrl(data.publicUrl);
      setUploadState(UploadStatus.DISPLAYING_THUMBNAIL);
      updateForm({ image_url: data.publicUrl });
    }
  };

  return (
    <>
      {uploadState === UploadStatus.WAITING_FOR_FILE && <AddImageDropZone onFileSelected={onFileSelected} />}
      {uploadState === UploadStatus.UPLOADING_FILE && <>uploading file</>}
      {uploadState === UploadStatus.WAITING_FOR_THUMBNAIL && <>WAITING_FOR_THUMBNAIL</>}
      {uploadState === UploadStatus.DISPLAYING_THUMBNAIL && thumbnailUrl?.length && (
        <>{thumbnailUrl && <Image src={thumbnailUrl} alt="finding image" maxWidth="500px" />}</>
      )}
    </>
  );
};

export default AddImageInput;

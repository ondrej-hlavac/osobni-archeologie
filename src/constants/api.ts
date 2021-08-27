export const baseApiUrl =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030/.netlify/functions/server'
    : 'https://api-osobniarcheologie.netlify.app/.netlify/functions/server';

export const FINDINGS = `${baseApiUrl}/findings`;
export const TAGS = `${baseApiUrl}/tags`;
export const TIME_TAGS = `${baseApiUrl}/time-tags`;
export const FINDING_IMAGE = `${baseApiUrl}/finding-image`;

export const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

export const imageHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'image/jpeg',
};

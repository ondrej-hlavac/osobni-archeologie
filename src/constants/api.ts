export const baseApiUrl =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030/.netlify/functions/server'
    : 'https://vigilant-spence-429f6a.netlify.app/.netlify/functions/server';

export const FINDINGS = `${baseApiUrl}/findings`;
export const TAGS = `${baseApiUrl}/tags`;

export const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

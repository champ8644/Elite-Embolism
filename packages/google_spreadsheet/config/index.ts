import { JWT } from 'google-auth-library';

import { GoogleSpreadsheet } from 'google-spreadsheet';

import path from 'path';

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

export const jwt = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.split(String.raw`\n`).join('\n'),
  scopes: SCOPES,
});

export const Stroke_google_sheet = new GoogleSpreadsheet(
  '1AUVKOXCHCMtx1BMFHdFtLnvhm3iXRkp5hhLlhinIby4',
  jwt
);

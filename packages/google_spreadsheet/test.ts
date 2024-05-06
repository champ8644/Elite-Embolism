import { GoogleSpreadsheet } from 'google-spreadsheet';
import { jwt } from './config';

export async function main() {
  const doc = new GoogleSpreadsheet(
    '1AUVKOXCHCMtx1BMFHdFtLnvhm3iXRkp5hhLlhinIby4',
    jwt
  );
  console.log('🚀 ~ main ~ doc:', doc);
  await doc.loadInfo(); // loads document properties and worksheets
}

main();

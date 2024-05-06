import { GoogleSpreadsheet } from 'google-spreadsheet';
import { Stroke_google_sheet } from './config';

export async function main() {
  const doc = Stroke_google_sheet;

  await doc.loadInfo(); // loads document properties and worksheets
  //   console.log(doc.title);
  //   await doc.updateProperties({ title: 'renamed doc' })

  const sheet = doc.sheetsById[2093304930]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`

  type StrokeRowData = Partial<{
    No: string;
    สาย: string;
    From: 'ER' | 'Ward' | 'Refer' | 'Appointed' | '';
    Ward: string;
    เตียง: string;
    HN: string;
    Name: string;
    Age: string;
    Gender: 'Female' | 'Male' | '';
    DOA: string;
    'Plann LOS': string;
    'Plan D/C': string;
    LOS: string;
    'Actual D/C': string;
    'Problem list / Dx': string;
    'Mx & PLAN': string;
    'Is stroke':
      | 'STROKE'
      | 'STROKE-MIMIC'
      | 'Neuro Mus'
      | 'CEA'
      | 'Epilepsy'
      | '';
    TOAST:
      | 'LAA'
      | 'Cardioembolic'
      | 'Small vessel'
      | 'Other determined'
      | 'Undetermined'
      | 'Non-stroke'
      | '';
    'rt-PA': string;
    Thrombectomy: string;
    Staff: string;
    Discharge: 'Discharged' | 'Dead' | '';
  }>;
  const strokeRows = await sheet.getRows<StrokeRowData>();

  const toBeAdd: StrokeRowData = {
    No: `${strokeRows.length + 1}`,
  };

  sheet.addRow(toBeAdd);
}

main();

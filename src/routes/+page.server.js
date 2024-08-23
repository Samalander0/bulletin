import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { json } from '@sveltejs/kit';
import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked'

import { GOOGLE_API_KEY } from '$env/static/private'
import { GOOGLE_EMAIL } from '$env/static/private'


export async function load() {
  const spreadsheetId = '1q1N8RtdMdor7kNp-ZfW2x7eRADEBp0v6oXqTp3tUjs0' // From URL of Google Sheet

  const auth = new JWT({
    email: GOOGLE_EMAIL,
    key: GOOGLE_API_KEY.split(String.raw`\n`).join('\n'),
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      // note that sharing-related calls require the google drive scope
      'https://www.googleapis.com/auth/drive.file',
    ],
  });

  const doc = new GoogleSpreadsheet(spreadsheetId, auth);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];

  const rows = await sheet.getRows();

  let notes = [];

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i]
    notes.push({
      created: row.get('Created'),
      title: row.get('Title'),
      content: DOMPurify.sanitize(marked(row.get('Content'))),
    })
  }

  return {
    notes
  }
}
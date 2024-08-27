import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { json } from '@sveltejs/kit';
import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked'

import { GOOGLE_API_KEY } from '$env/static/private'
import { GOOGLE_EMAIL } from '$env/static/private'
import { SPREADSHEET_ID } from '$env/static/private'


export async function load() {
  const spreadsheetId = SPREADSHEET_ID // From URL of Google Sheet

  const auth = new JWT({ // Authenticate with Google API
    email: GOOGLE_EMAIL,
    key: GOOGLE_API_KEY.split(String.raw`\n`).join('\n'),
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      // note that sharing-related calls require the google drive scope
      'https://www.googleapis.com/auth/drive.file',
    ],
  });

  // AUTH NOTE: Selected sheet needs to be shared with google service account 

  const doc = new GoogleSpreadsheet(spreadsheetId, auth); // Get spreadsheet info from Google (pass in spreadsheet id & authentication)
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];

  const rows = await sheet.getRows();

  let notes = [];

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i]

    let content = row.get('Content')
    if (content) {
      content = DOMPurify.sanitize(marked(content))
    } else {
      content = ""
    }

    notes.push({
      created: row.get('Created'),
      title: row.get('Title'),
      color: row.get('Color'),
      content
    })
  }

  return {
    notes
  }
}
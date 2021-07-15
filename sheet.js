const docs = require("@googleapis/docs");
const { google, sheets_v4 } = require("googleapis");

async function test() {
  const auth = new docs.auth.GoogleAuth({
    keyFilename: "",
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const authClient = await auth.getClient();

  const sheet = new sheets_v4.Sheets({ auth: authClient });

  const tsErrorSheet = await sheet.spreadsheets.get({
    spreadsheetId: "",
  });

  const tsErrorSheet = await sheet.spreadsheets.batchUpdate({
    updateSpreadsheetProperties: {
      properties: {
        title: "TypeScript Error Report",
      },
    },
  });
}

test();

function doPost(e) {
    var sheet = SpreadsheetApp.openById("").getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([new Date(), data.name, data.email, data.message]);
    return ContentService.createTextOutput("Success");
  }
  
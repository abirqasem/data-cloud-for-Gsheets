/* Add-on  "hook" */




function onOpen(e) {

  SpreadsheetApp.getUi().createAddonMenu().addItem('Start', 'make_tc').addToUi()
  
}


function onInstall(e) {

  onOpen(e);

}

function make_tc() {
   try {
      SpreadsheetApp.getUi().showSidebar(HtmlService.createTemplateFromFile("UI").evaluate().setTitle("Data Cloud for Gsheets").setWidth(300).setSandboxMode(HtmlService.SandboxMode.IFRAME));
   }
   catch(e)
   {
     var msg="Error. Please re-try."
     SpreadsheetApp.getUi().alert(msg + e);
   
   }
  return;

}


/* Add-on code */

/* 

 Gets data from the active range of the spreadsheet and then checks if the data can be treated as a frequency distribution table. 
 For now it checks if the data is a 2 column table and if the second column entries are numeric. Clearly a lot can be added to the checker.  
 If the check passes the data is formatted as an input the javascript cloud drawing library and sent back. 


*/

function gen_fd_from_ss () {
  var items  = [];
  var range = SpreadsheetApp.getActiveRange() 
  
  if (range.getValues()[0].length !== 2)
    throw "Incorrect Range Error: The range width can only be 2 columns";
  
  var fd_data = range.getValues()
  var num_values = fd_data.length;
  
  
  for (var i=0; i<num_values; i++) {
    
    if (isNaN (fd_data[i][1])) {
      throw "Incorrect Format Error: The data in second column must be numeric"
    }
    
    items.push({text: fd_data[i][0], weight:fd_data[i][1]}); // this is the format needed for the cloud drawing library 
  }
  
  
 return items
  
}








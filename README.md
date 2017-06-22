# data-cloud-for-Gsheets
A **bare-bones** add-on for google sheets that generates tag clouds from spreadsheet data

![alt text](http://abirqasem.github.io/pics_for_apps/AQ%20time%20sheet%20-%20Google%20Sheets.clipular.png)


### Installation

1. Create a Google Apps Script project. If you do not know how to here's a [nice intro.](http://blogs.worldbank.org/publicsphere/bill-gates-did-it-william-did-it-mayor-bloomberg-did-it-and-even-potus-did-it-shouldnt-you-hour-code)
3. Fork/clone this repository and add all the files to Google Apps Script project (make sure the file names remain the same, *they matter*)
4. From the script editor of your Google Apps Script go to Publish --> Test as add-on.. menu
5. Create a test configuration. [Here's how](https://developers.google.com/apps-script/add-ons/test)
6. Once the test configuration is set up, run the Test.
7. It will launch the test spreadsheet (that you have selected during the test configuration)
8. You will be able find this add-on under the Add-ons menu of the spreadsheet

### Usage
1. Select a range
2. The range should be two columns
3. The first column should contain the tags/words for which you want to make a word cloud
4. The second column must be numeric, it should have values that capture the relative magnitude of the tags, e.g. frequencies, size etc.


### Credits and notes
- Code borrowed from the work of [Learn in 60 seconds](http:Learnin60seconds.com)
- Word cloud jQuery library credit goes to [mistic100](https://github.com/mistic100/jQCloud) 


### License
This code is available under the MIT license. 




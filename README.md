# Backbone-Petlist
An exercise in architecting a dogsitter finder airbnb style app with Backbone and Handlebar running on webpack dev server for demo. Just `npm install`and run `npm run dev` to demo.

Using handy collections utilty and handlebar helpers to keep code compact for the ingestion of the following endpoints and scenarios:

## Data Endpoints

The endpoints below will return the exact same data payload as shown below. We just want you to interact with the different endpoints. So the response that is returned by http://localhost:3000/static/search.json will be the same as  http://localhost:3000/static/search.json?service=boarding and  http://localhost:3000/static/search.json?service=sitting

## Individual Endpoints

http://localhost:3000/static/search.json
http://localhost:3000/static/search.json?service=boarding
http://localhost:3000/static/search.json?service=sitting
User Stories

__GIVEN: A user comes to a search page
__WHEN: The user views the page
__THEN: They will see a list of results containing:

* A Title
  * With URL link to individual page.  The rules to create the URL's are below.
* First Name with Last Initial
* Pet Name
* Description


These are the rules for each field:
* Url
 * created from the title field located in search.json
 * dashes for spaces
 * Only alpha numeric characters, underscore and dashes
 * no double dashses
 * i.e:
    * one two three => one-two-three
    * one two  three => one-two-three
    * one--two-three => one-two-three
    * Title: My Title => URL: my-title
    * Title: John's Dog Sitting => URL: johns-dog-sitting
* First Name with Last Initial
  * Capitalize the first character of the first name and last name
  * i.e.
    * seth broomer => Seth B.
* Description
  * At 48 characters and above we want to show ellipses
  * If the 48th character is in the middle of a word then we want to not show that word.
  * ie:
    * word1 description1 word2 description2 word3 description3 word4 description4 => word1 description1 word2 description2 word3...    

Use http://localhost:3000/static/search.json API  

__GIVEN__: A user comes to a search page  
__WHEN__: The user clicks on the boarding filter  
__THEN__: Then they will see the results from the search.json  with the service=boarding specified.  
(Use http://localhost:3000/static/search.json?service=boarding API)

__GIVEN__: A user comes to a search page  
__WHEN__: The user clicks on the sitting filter  
__THEN__: Then they will see the results from the search.json  with the service=sitting specified.  
(Use http://localhost:3000/static/search.json?service=sitting API)

__GIVEN__: A user comes to a search page  
__WHEN__: The user clicks on the result title  
__THEN__: A new tab will pop up navigating to the results url
(no page will be displayed, just testing to see the url working)  

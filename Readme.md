- App bulid by Vaibhav Yadav.
- Implented API Calls.

------- About Random Dog Generator App ------------
This is Random Dog Generater that will display some random dog every time you click "Next" button.
It will only have img tag and src attribute that will show the dog image after getting it from API promises, also have Next button that will generate Random dog on calling onclick event and using 'showdogs()' funtion each time it is clicked.

--------------- About Javascript Code Implementation ----------------
There is showdogs() function that will make API calls and return a promise and then will use that data using '.then' method to get our data(extract url part of it) in json format and pass it to showdogs() function as a parameter.
And at last we will create showdogs() function that will display result at DOM using the paramter we passed to it using 'document.getElementById()' method.

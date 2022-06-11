const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  
  // Notes: createElement() method accepts an HTML tag name and returns a new Node with the Element type.

  let header = document.createElement('div');
  let span = document.createElement('span');
  let h1 = document.createElement('h1');
  let span2 = document.createElement('span');

  

  /* Notes: createAttribute() method creates a new attribute node, and returns it.
   The object created is a node impementing the Attribute interface.  
   The Dom does not enforce what sort of attributes can be added to a particular element in this manner.
  */
  header.setAttribute('class', 'header');
  span.setAttribute('class', 'date');
  span2.setAttribute('class', 'temp');

  /* .textContent property SETS OR RETURNS THE TEXT CONTENT OF THE SPECIFIED NODE, AND ALL IT'S DESCENDANTS. */ 
  span.textContent = date;
  h1.textContent = title;
  span2.textContent = temp;

  console.log(span2);
  console.log(span);
  console.log(header);
  console.log(h1);
 /* the console.log() is a function in JavaScript which is used to PRINT ANY KIND OF VARIABLES
 DEFINED BEFORE IN IT OR TO JUST PRINT ANY MESSAGE THAT NEEDS TO BE DISPLAYED TO THE USER*/

  header.appendChild(span);
  header.appendChild(h1);
  header.appendChild(span2);

/* The appendChild() method APPENDS A NODE (element) AS THE LAST CHILD OF AN ELEMENT. */
/* A return statement ENDS THE EXECUTION OF A FUNCTION, AND RETURNS CONTROL TO THE CALLING FUNCTION. */ 
 return header;
}

const headerAppender = (selector) => {


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  
 /* document.querySelector() method RETURNS THE FIRST ELEMENT WITHIN THE DOCUMENT THAT MATCHES THE SPECIFIED SELECTOR,
  OR GROUP OF SELECTORS ('querySelectorAll()'). if no matches are found, null is returned.*/

  let mySelector = document.querySelector(selector);
  mySelector.appendChild(Header('title', 'date', 'temp'));
  console.log(Header('title', 'date', 'temp'));
}

export { Header, headerAppender }

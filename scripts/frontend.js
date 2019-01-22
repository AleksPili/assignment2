// table CREATETABLEFROMJSON take from - https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm on the 20/12/18
// constructing the set variables - THIS WILL NEED TO BE UPDATED.

var api = "http://127.0.0.1:3000/"
var books = "books/"
var authors = "authors/"
var authorbooks = "authors/1/books"
var users = "users/"
var apiSearchUsers = "http://127.0.0.1:3000/search?type=user&barcode=" //"http://127.0.0.1:3000/search?type=barcode="
var apiSearchBooks = "http://127.0.0.1:3000/search?type=book&title="
var lendList = ""


// JS for Search function on books tab (GET)



const searchBooks = function() { 
  let inputName2 = document.getElementById('booksearch').value; // grabbing the "searchusers" value
  let burl= apiSearchBooks + inputName2 // constructing the URL
  let httpReq = new XMLHttpRequest(); // Constructing the request
  httpReq.addEventListener("load", processResponse2)
  httpReq.open("GET", burl)
  httpReq.send();
}

const processResponse2 = function() {
  let response = JSON.parse(this.response); // is this correct? It keeps throwing up errors and since I have no idea what I'm doing....
  document.getElementById("bookresulttext"); // 
  CreateTableFromJSON2(response); // 
  response.forEach(function(records) {
  let addListItem = (newList, records.name);
  });
}

const searchButton_2 = document.getElementById("search_books_button");
  searchButton_2.addEventListener('click', searchBooks)



// JS for search function on Users tab (GET)

const searchUsers = function() { 
  let inputName = document.getElementById('userName').value; // grabbing the "searchusers" value
  let url= api + users + inputName // constructing the URL
  let httpReq = new XMLHttpRequest(); // Constructing the request
  httpReq.addEventListener("load", processResponse)
  httpReq.open("GET", url)
  httpReq.send();
}

const processResponse = function() {
  let response = JSON.parse(this.response); // is this correct? It keeps throwing up errors and since I have no idea what I'm doing....
  CreateTableFromJSON(response); // createList needs to be a new function that fills into your ID'd area "userresulttext"
  response.forEach(function(records) {
  //return processResponse;
  });
}

const searchButton_1 = document.getElementById("search_users_button");
  searchButton_1.addEventListener('click', searchUsers)


  // add users, no worky.

debugger;
const addUsers = function() { 
  let inputName = document.getElementById("userName").value;
  let staffOrStudent = document.getElementById("staffcb").value; 
  let url = api + users 
  let barcode = Math.floor((Math.random() * 1000000) + 1)
  let httpReq = new XMLHttpRequest();
  httpReq.open("POST", url);
  httpReq.setRequestHeader
  httpReq.send(JSON.stringify({"name": inputName , "barcode": barcode , "memberType": staffOrStudent}));
}


const add_users_button = document.getElementById("add_users_button");
 add_users_button.addEventListener('click', addUsers)

// Book adding. 

const addBooks = function() {
  let inputName = document.getElementById("booktitle").value;
  let inputName2 = document.getElementById("ISBN").value;
  let inputName3 = document.getElementById("authoradd").value;
  let url = api + authorbooks
  let url1 = api + authors + inputName3;
  let httpReq = new XMLHttpRequest();
  httpReq.open("POST", url1);
  httpReq.setRequestHeader;
  httpReq.send(JSON.stringify({"Author": inputName3}))
  httpReq.open("POST", url);
  httpReq.setRequestHeader;
  httpReq.send(JSON.stringify({"bookTitle": inputName, "bookISBN": inputName2 }))
}

const add_books_button = document.getElementById("add_books_button");
  add_books_button.addEventListener('click', addBooks)

// probaly easier to just nail this out completely. 

const CreateTableFromJSON = function(outputDiv) {
    
  // EXTRACT VALUE FOR HTML HEADER. 
  // ('Book ID', 'Book Name', 'etc')
  var col = [];
  for (var i = 0; i < 4; i++) {
      for (var key in outputDiv[i]) {
          if (col.indexOf(key) === -1) {
              col.push(key);
            }
        }
    }

  // CREATE DYNAMIC TABLE.
  var table = document.createElement("table");

  // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

  var tr = table.insertRow(-1);                   // TABLE ROW.

  for (var i = 0; i < 4; i++) {
      var th = document.createElement("th");      // TABLE HEADER.
      th.innerHTML = col[i];
      tr.appendChild(th);
  }

  // ADD JSON DATA TO THE TABLE AS ROWS.
  for (var i = 0; i < outputDiv.length; i++) {

      tr = table.insertRow(-1);

      for (var j = 0; j < 4; j++) {
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = outputDiv[i][col[j]];
      }
  }

  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  var divContainer = document.getElementById("userresulttext");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    divContainer.getElementById("userresulttext").style.paddingLeft = "20%";
}

const CreateTableFromJSON2 = function(outputDiv) {
    
  // EXTRACT VALUE FOR HTML HEADER. 
  // ('Book ID', 'Book Name', 'etc')
  var col = [];
  for (var i = 0; i < 3; i++) {
      for (var key in outputDiv[i]) {
          if (col.indexOf(key) === -1) {
              col.push(key);
            }
        }
    }

  // CREATE DYNAMIC TABLE.
  var table = document.createElement("table");

  // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

  var tr = table.insertRow(-1);                   // TABLE ROW.

  for (var i = 0; i < 3; i++) {
      var th = document.createElement("th");      // TABLE HEADER.
      th.innerHTML = col[i];
      tr.appendChild(th);
  }

  // ADD JSON DATA TO THE TABLE AS ROWS.
  for (var i = 0; i < outputDiv.length; i++) {

      tr = table.insertRow(-1);

      for (var j = 0; j < 3; j++) {
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = outputDiv[i][col[j]];
      }
  }

  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  var divContainer = document.getElementById("bookresulttext");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}


  //const createList = function(parentElement) {
 // let newList = document.createElement("ol");
 // parentElement.appendChild(newList);
 // return console.log(newList);
//};

//const addListItem = function(parentList, textContent) {
 // let newItem = document.createElement("li");
//  newItem.appendChild(document.createTextNode(textContent));
//  parentList.appendChild(newItem);




// Below here is the functionality for the tabs. No Api stuff, Mostly cosmetic. 

function openTab(evt, menuName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
  }

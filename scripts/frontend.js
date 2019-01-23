// table CREATETABLEFROMJSON taken from - https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm on the 20/12/18
// Drop menu taken from - https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json


// constructing the set variables - THIS WILL NEED TO BE UPDATED.

var api = "http://127.0.0.1:3000/";
var books = "books/";
var authors = "authors/";
var authorbooks = "authors/1/books/";
var users = "users/" ;
var apiSearchUsers = "http://127.0.0.1:3000/search?type=user&barcode=" ; //"http://127.0.0.1:3000/search?type=barcode="
var apiSearchBooks = "http://127.0.0.1:3000/search?type=book&title=" ;
var lendList = "http://127.0.0.1:3000/search?type=book" ;
var httpReq = new XMLHttpRequest();
var lendDate = new Date(Date.now() + 12096e5);


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
  };


const searchButton_2 = document.getElementById("search_books_button");
  searchButton_2.addEventListener('click', searchBooks)



// JS for search function on Users tab (GET)

const searchUsers = function() { 
  let inputName = document.getElementById('searchusers').value; // grabbing the "searchusers" value
  let url= apiSearchUsers + inputName // constructing the URL 
  httpReq.addEventListener("load", processResponse)
  httpReq.open("GET", url)
  httpReq.send();
}

const processResponse = function() {
  let response = JSON.parse(this.response); // is this correct? It keeps throwing up errors and since I have no idea what I'm doing....
  CreateTableFromJSON(response); // createList needs to be a new function that fills into your ID'd area "userresulttext"
  response.forEach(function(records) {
  });
}

const searchButton_1 = document.getElementById("search_users_button");
  searchButton_1.addEventListener('click', searchUsers);


// add users

debugger;
const addUsers = function() { 
  let inputName = document.getElementById("userName").value;
  let staffOrStudent = document.getElementById("staffcb").value; 
  let url = api + users ;
  let barcode = Math.floor((Math.random() * 1000000) + 1);
  httpReq.open("POST", url);
  httpReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  httpReq.send(JSON.stringify({"name": inputName , "barcode": barcode , "memberType": staffOrStudent}));
}


const add_users_button = document.getElementById("add_users_button");
 add_users_button.addEventListener('click', addUsers);
 

// delete users

const delUsers = function() {
  let inputName = document.getElementById("userDelete").value;
  let url = api + users + inputName;
  httpReq.open("DELETE", url);
  httpReq.send();
}
// edit users

const editUsers = function() {
  let inputName = document.getElementById("userName").value;
  let inputName2 = document.getElementById("staffcb").value;
  let inputName3 = document.getElementById("userDelete").value;
  let url = api + users + inputName3;
  httpReq.open("PUT", url);
  httpReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  httpReq.send(JSON.stringify({"name": inputName , "memberType": inputName2 }));
}

// Book adding. 

const addBooks = function() {
  let inputName = document.getElementById("booktitle").value;
  let inputName2 = document.getElementById("ISBN").value;
  let inputName3 = document.getElementById("authoradd").value;
  let url = api + authorbooks;
  let url1 = api + authors;
  let httpReq = new XMLHttpRequest();
  httpReq.open("POST", url1);
  httpReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");;
  httpReq.send(JSON.stringify({"Author": inputName3}))
  httpReq.open("POST", url);
  httpReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");;
  httpReq.send(JSON.stringify({"bookTitle": inputName, "bookISBN": inputName2 }));
}

const add_books_button = document.getElementById("add_books_button");
  add_books_button.addEventListener('click', addBooks);

const delBooks = function() {
  let inputName = document.getElementById("bookDel").value;
  let url = api + books + inputName;
  httpReq.open("DELETE", url)
  httpReq.send()
}
// book editing

const editBooks = function(){
  let inputName = document.getElementById("booktitle").value;
  let inputName2 = document.getElementById("ISBN").value;
  let imputName3 = document.getElementById("bookDel").value;
  let url = api + books + imputName3
  httpReq.open("PUT", url);
  httpReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");;
  httpReq.send(JSON.stringify({"bookTitle": inputName, "bookISBN": inputName2 }));
}
  

// book lending 103 - 164 - Populating the drop downs, 166 lend book function.


let dropdown1 = document.getElementById("lenddropdown");
dropdown1.length = 0;

let defaultOption1 = document.createElement('option');
defaultOption1.text = "Choose Book";

dropdown1.add(defaultOption1);
dropdown1.selectedIndex = 0;

httpReq.open("GET", lendList, true);

httpReq.onload = function() {
  if (httpReq.status === 200) {
    const data = JSON.parse(httpReq.responseText)
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement("option");
      option.text = data[i].title;
      option.value = data[i].abbreviation;
      dropdown1.add(option)
    }
  }  else {
  }
}
httpReq.onerror = function() {
console.error("An error occured with" + lendList);
};

httpReq.send();

let dropdown2 = document.getElementById("userlenddropdown");
dropdown2.length = 0;

let defaultOption2 = document.createElement('option');
defaultOption2.text = "Choose User";

dropdown2.add(defaultOption2);
dropdown2.selectedIndex = 0;

httpReq.open("GET", api + users, true);

httpReq.onload = function() {
 if (httpReq.status === 200) {
    const data = JSON.parse(httpReq.responseText)
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement("option");
      option.text = data[i].name;
      option.value = data[i].abbreviation;
      dropdown2.add(option)
    }
  }  else {
  }
}
httpReq.onerror = function() {
  console.error("An error occured with" + api + users)
};

httpReq.send();

//const lendbooks = document.getElementById("lend");
// add_users_button.addEventListener('click', lendBookFunc)

//const lendBookFunc = function() { 
//  let inputName1 = document.getElementById("lenddropdown").value
//  let inputName2 = document.getElementById("userlenddropdown").value
 // let url = api + users + inputName2 + "/" + loans + inputName1
 // httpReq.open("POST", url)
//  httpReq.send(JSON.stringify({ , lendDate}))

// probably easier to just nail this out completely. 

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

// The buttons for del only work down here. 

const del_users_button = document.getElementById("del_users_button");
  del_users_button.addEventListener('click', delUsers);

const del_books_button = document.getElementById("del_books_button");
del_books_button.addEventListener('click', delBooks);

const edit_books = document.getElementById("edit_books_button");
  edit_books.addEventListener("click", editBooks)

const edit_users = document.getElementById("edit_users_button")
  edit_users.addEventListener("click", editUsers)
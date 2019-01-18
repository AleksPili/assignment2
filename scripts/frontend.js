//let searchButtonUsers = document.getElementById("search_users_button");
//submitButton.addEventListener("click", function() {
 // let nameSearch = document.getElementById("Name").nodeValue;
 // console.log(Name);
//}

// constructing the set variables - THIS WILL NEED TO BE UPDATED.

var api = "http://127.0.0.1:3000/"
var books = "books/"
var authors = "authors/"
var users = "users/"
var apiSearchUsers = "http://127.0.0.1:3000/search?type=user&barcode=" //"http://127.0.0.1:3000/search?type=barcode="
var apiSearchBooks = "http://127.0.0.1:3000/search?type=book&title="

// JS for Search function on books tab (GET)

const searchBooks = function() { 
  let inputName2 = document.getElementById('booksearch').value; // grabbing the "searchusers" value
  let burl= apiSearchBooks + inputName2 // constructing the URL
  let httpReq = new XMLHttpRequest(); // Constructing the request
  httpReq.addEventListener("load", processResponse2)
  httpReq.open("GET", burl)
  httpReq.send();
  return searchBooks // Is this returning the JSON objects as a string? I don't 
}

const processResponse2 = function() {
  let response = JSON.parse(this.response); // is this correct? It keeps throwing up errors and since I have no idea what I'm doing....
  let outputDiv = document.getElementById("bookresulttext"); // 
  let newList = CreateTableFromJSON(outputDiv); // 
  response.forEach(function(records) {
  let addListItem = (newList, records.name);
  });
}

const searchButton_2 = document.getElementById("search_books_button");
  searchButton_2.addEventListener('click', searchBooks())



// JS for search function on Users tab (GET)

const searchUsers = function() { 
  let inputName = document.getElementById('search_users_button').value; // grabbing the "searchusers" value
  let url= apiSearchUsers + inputName // constructing the URL
  let httpReq = new XMLHttpRequest(); // Constructing the request
  httpReq.addEventListener("load", processResponse)
  httpReq.open("GET", url)
  httpReq.send();
  return searchUsers // Is this returning the JSON objects as a string? I don't 
}

const processResponse = function() {
  let response = JSON.parse(this.response); // is this correct? It keeps throwing up errors and since I have no idea what I'm doing....
  let outputDiv = document.getElementById("userresulttext"); // hoping this will mean that results get painted to the page.
  let newList = CreateTableFromJSON(outputDiv); // createList needs to be a new function that fills into your ID'd area "userresulttext"
  response.forEach(function(records) {
  let addListItem = (newList, records.name);
  });
}

const searchButton_1 = document.getElementById("search_users_button");
  searchButton_1.addEventListener('click', searchUsers())

const CreateTableFromJSON = function() {
    
  // EXTRACT VALUE FOR HTML HEADER. 
  // ('Book ID', 'Book Name', 'etc')
  var col = [];
  for (var i = 0; i < searchUsers.length; i++) {
      for (var key in searchUsers[i]) {
          if (col.indexOf(key) === -1) {
              col.push(key);
            }
        }
    }

  // CREATE DYNAMIC TABLE.
  var table = document.createElement("table");

  // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

  var tr = table.insertRow(-1);                   // TABLE ROW.

  for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th");      // TABLE HEADER.
      th.innerHTML = col[i];
      tr.appendChild(th);
  }

  // ADD JSON DATA TO THE TABLE AS ROWS.
  for (var i = 0; i < searchUsers.length; i++) {

      tr = table.insertRow(-1);

      for (var j = 0; j < col.length; j++) {
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = searchUsers[i][col[j]];
      }
  }

  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  var divContainer = document.getElementById("userresulttext");
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

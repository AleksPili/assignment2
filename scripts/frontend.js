//let searchButtonUsers = document.getElementById("search_users_button");
//submitButton.addEventListener("click", function() {
 // let nameSearch = document.getElementById("Name").nodeValue;
 // console.log(Name);
//}

// constructing the set variables.

var api = "http://127.0.0.1:3000/"
var books = "books/"
var authors = "authors/"
var users = "users/"
var apiSearchUsers = "http://127.0.0.1:3000/search?type=user&barcode=" //"http://127.0.0.1:3000/search?type=barcode="


// JS for search function on Users tab (GET)



const searchUsers = function(searchusers) { 
  let inputName = document.getElementById('searchusers').value; // grabbing the "searchusers" value
  let url= apiSearchUsers + inputName // constructing the URL
  let httpReq = new XMLHttpRequest(); // Constructing the request
  httpReq.addEventListener("load", processResponce)
  httpReq.open("GET", url)
  httpReq.send();
  //console.log(httpReq)
}

const processResponce = function() {
  let responce = JSON.parse(this.responce); // is this correct? It keeps throwing up errors and since I have no idea what I'm doing....
  console.log(responce);
  let outputDiv = document.getElementById("userresulttext"); // hoping this will mean that results get painted to the page.
  let newList = createList(outputDiv);
  responce.ForEach(function(records) {
    addListItem(newList, records.name);
  });
}

const searchButton_1 = document.getElementById("search_users_button");
  searchButton_1.addEventListener('click', searchUsers())



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

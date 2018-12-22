//let searchButtonUsers = document.getElementById("search_users_button");
//submitButton.addEventListener("click", function() {
 // let nameSearch = document.getElementById("Name").nodeValue;
 // console.log(Name);
//}

// constructing the set variables.

var api = "http://127.0.0.1/"
var books = "books/"
var authors = "authors/"
var users = "users/"
var apiSearchUsers = "http://127.0.0.1/users" //"http://127.0.0.1/search?type=user="


// JS for search function on Users tab (GET)

const processResponce = function() {
  let responce = JSON.parse(this.responce);
  console.log(responce)
}
const searchUsers = function(Name) { 
  let inputName = document.getElementById('Name').value; // grabbing the "Name" value
  let url= apiSearchUsers + inputName // constructing the URL
  let httpReq = new XMLHttpRequest(); // Constructing the request
  httpReq.addEventListener("load", processResponce)
  httpReq.open("GET", url)
  httpReq.send();
  console.log(url)
}

var searchButton_1 = document.getElementById("search_users_button");
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

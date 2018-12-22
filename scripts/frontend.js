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
var apiSearchUsers = "http://127.0.0.1/search?type=user="
let httpReq = new XMLHttpRequest()

//let input = document.getElementById('Name').value;

// Input variables

const searchUsers = function (Name) {
  var inputName = document.getElementById('Name').value;
  var url= apiSearchUsers + inputName
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

var user1 = {};
var user2 = {};
var user3 = {};
var user4 = {};
var user5 = {};


var users = [user1, user2, user3, user4, user5]

var listOfFirstnames = ["Kyle", "Kerrie", "Kruger", "KC", "Kromp"];
var lastNames = ["Quincy", "Quaint", "Quale", "Quwibble", "Kwomp"];

var parentsArr = ["Timmy Patty", "James Jessy", "Matt Alex", "Pats Jess", "Fumi Scott" ];


 for (var i = 0; i < users.length; i++) {
	users[i].firstName = listOfFirstnames[i];
	users[i].lastname = lastNames[i];
	users[i].parents = parentsArr[i];
 }
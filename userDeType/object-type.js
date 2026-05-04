"use strict";
// let user1 = {userName:"asew",age:32}
// console.log(user1);
let users;
users = [];
let user1;
user1 = { userName: "asew", age: 32 };
users.push(user1);
// console.log(users);
let user2;
user2 = { userName: "qure", age: 92 };
users.push(user2);
let getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");

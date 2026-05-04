// let user1 = {userName:"asew",age:32}
// console.log(user1);
let users:object[] 
 users=[];
 type User = {userName:string,age:number}
let user1:User
user1 = {userName:"asew",age:32}
users.push(user1)
// console.log(users);

let user2:User
user2 = {userName:"qure",age:92}
users.push(user2)
console.log(users);
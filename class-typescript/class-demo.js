"use strict";
class User {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`userName : ${this.userName}, age: ${this.age}`);
    }
}
let user1 = new User("sd", 78);
user1.display();
let user2 = new User("emon", 18);
user2.display();
let user3 = new User("korim", 54);
user3.display();

"use strict";
class User {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`User Name: ${this.userName}, Age: ${this.age}`);
    }
}
class Students extends User {
    studentId;
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`Student Name: ${this.userName}, Age: ${this.age}, Student ID: ${this.studentId}`);
    }
    setStudentId(id) {
        this.studentId = id;
    }
    getStudentId() {
        return this.studentId;
    }
}
let user1 = new User("ss", 22);
user1.userName = "kamrul";
// console.log(user1)
user1.display();
let stu1 = new Students("sd", 78, 101);
stu1.setStudentId(220);
// stu1.display()
console.log(stu1.getStudentId());
// let user1 = new User("sd",78)
// user1.display()
// let user2 = new User("emon",18)
// user2.display()
// let user3 = new User("korim",54)
// user3.display()

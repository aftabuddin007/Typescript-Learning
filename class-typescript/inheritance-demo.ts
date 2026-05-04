class User{
   userName:string;
   age:number;
    constructor(userName:string,age:number){

        this.userName=userName;
        this.age=age
    }
display():void{
    console.log(`userName : ${this.userName}, age: ${this.age}`);
}
}
class Students extends User{
studentId:number;
constructor(userName:string, age:number, studentId:number){
    super(userName, age);
    this.studentId = studentId;
}
display():void{
    console.log(`student id: ${this.studentId} userName : ${this.userName}, age: ${this.age}`);
}
}
let stu1 = new Students("aftab",23,89)
stu1.display()
// let user1 = new User("sd",78)
// user1.display()
// let user2 = new User("emon",18)
// user2.display()
// let user3 = new User("korim",54)
// user3.display()
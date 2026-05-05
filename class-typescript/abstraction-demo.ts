abstract class User{
   userName:string;
   age:number;
    constructor(userName:string,age:number){

        this.userName=userName;
        this.age=age
    }
abstract display():void
}
class Students extends User{
studentId:number;
constructor(userName:string, age:number, studentId:number){
    super(userName, age);
    this.studentId = studentId;
}
 display():void;



}
// let user1 = new User("sd",78)
// user1.display()
// let user2 = new User("emon",18)
// user2.display()
// let user3 = new User("korim",54)
// user3.display()
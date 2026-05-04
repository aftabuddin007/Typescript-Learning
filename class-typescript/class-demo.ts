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
let user1 = new User("sd",78)
user1.display()
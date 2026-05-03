let userId:string | number;
userId = 333;
userId = '444';


function displayUserInfo(userId:string | number){
    console.log(`User ID: ${userId}`);
}
displayUserInfo("3232")
displayUserInfo(21345)
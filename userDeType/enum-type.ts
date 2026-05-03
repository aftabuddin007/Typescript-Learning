// enum - store constants
// numeric enum
enum RequestType{
    getData=1,
    deleteData,
    saveData
}
// console.log(RequestType);
// console.log(RequestType.getData);

// string enum
enum RequestType2{
    getData='GET',
    deleteData='DELETE',    
    saveData='SAVE'
}
// console.log(RequestType2);
// console.log(RequestType2.getData);


enum RequestType3{
    getData='GET',
    deleteData='DELETE', 
    id=22,
    saveData='SAVE'
}
console.log(RequestType3);
// console.log(RequestType3.getData);       
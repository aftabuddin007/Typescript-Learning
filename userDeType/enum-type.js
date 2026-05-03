"use strict";
// enum - store constants
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["getData"] = 1] = "getData";
    RequestType[RequestType["deleteData"] = 2] = "deleteData";
    RequestType[RequestType["saveData"] = 3] = "saveData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// console.log(RequestType.getData);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["getData"] = "GET";
    RequestType2["deleteData"] = "DELETE";
    RequestType2["saveData"] = "SAVE";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2);
// console.log(RequestType2.getData);
var RequestType3;
(function (RequestType3) {
    RequestType3["getData"] = "GET";
    RequestType3["deleteData"] = "DELETE";
    RequestType3[RequestType3["id"] = 22] = "id";
    RequestType3["saveData"] = "SAVE";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
// console.log(RequestType3.getData);       

const obj ={id:1, name: 'abul', age:20};
const jsonObj = JSON.stringify(obj)
console.log(obj);
console.log(jsonObj);
const objectJson = JSON.parse(jsonObj)
console.log(objectJson);
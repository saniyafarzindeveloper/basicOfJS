let myArr = ['l', 9, 0.666, '34567'];
//array methods

console.log(myArr.length);
//console.log(myArr.lastIndexOf);
console.log(myArr.pop());
console.log(myArr.push('hi'));
console.log(myArr.shift());
console.log(myArr.unshift('lol'));//shows the new length of the array by inserting an element at the start of array 
console.log('toString method: ', myArr.toString());
//console.log(myArr.sort);
console.log(myArr);

let newArray = [3, 8, 9, 0, 11];
newArray.sort(); 
console.log(newArray);
console.log(newArray.includes(7));
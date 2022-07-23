//vars are nothing but CONTAINERS
// var no1 = 90;
// var no2 = 79;

// console.log(no1, no2);
// console.log(no1 + no2);
// console.log(no1 * no2);
// console.log(no1 / no2);
// console.log(no1 - no2);

//if the type is not defined it by default takes type as VAR

//MDN DOC EG
//if the var is called out of {} it shows an error
'use strict';
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  //console.log(y); //ReferenceError in strict mode, `y` is scoped to `bar`
}

foo();


var random = 667.090;
console.log(random);

var str1 = 'saniya farzin';
console.log(str1);

var obj = {
  //key: value pairs
  student_name : 'zayn',
  marks: 88,
  year: 8,
  pointer: 9.6
}

console.log(obj.student_name);
//if-else

//ex.1
const age = 21;
if (age>18) {
    console.log('You are an adult.')
}
else{
    console.log('You are not an adult.')
}

//ex.2
const checker1 = 67;
const checker2 = 90;

if (checker1 == checker2) {
    // console.log('The 2 numbers are equal.')
    op = checker1*checker2;
    console.log(op)
} else {
    // console.log('Oooppss!!!The 2 numbers are not equal.')
    op = checker1-checker2;
    console.log(op);
}

//ex.3
const cipher_char = 43;
const from_char = 43;
var result = 9;
const clear_char = 0;
const to_char = 77;
var x = 3;


if (cipher_char === from_char) {
    result = result + to_char;
    x++;
    console.log(result);
  } else {
    result = result + clear_char;
    console.log(result);
  }


//is else-if else
  const vomit = true;
  const fever = true;

  if(vomit && fever ){
    console.log('you are suffering from typhoid');
  }
  else if(vomit || fever){
    console.log('plz get the tests done asap');
  }
  else{
    console.log('you are fit and healthy')
  }
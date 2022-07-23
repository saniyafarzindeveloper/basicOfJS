//setTimeout:  1st parameter as function, 2nd parameter is secs 


//arrow functions
logging = () =>{
    console.log('hello!!!!!')
}
setTimeout(logging, 3000);

//this function will get executed 1st since its tym is less
function greetme (){
    console.log('i am greet function. i am saying hi.');
}
setTimeout(greetme, 1000);

//tabnine eg
const loggedInUser = 'John';
function greet(userName) {
  console.log('Welcome ' + userName + '!');
}
setTimeout(greet, 2000, loggedInUser);

// use clearTimeout to stop setTimeout
//setInterval fires the same query continuosly

const no = 23;
 function check(no){
    if (no%2==0){
        console.log('number is even');
    }
    else{
        console.log('number is odd');
    }
 }

 setInterval(check, 2000); 

 //to create the stopping criteria we assign the setInterval to a var and we pass the var to clearInterval.

 //eg2 

 const year = 2023;
  passingYr = () =>{
    if (year == 2023){
        console.log('You will be graduating next year!');
    }
    else if (year == 2021){
        console.log('You are an alumini.');
    }
    else{
        console.log('No idea about your graduation year');
    }
  }

 setInterval(passingYr, 2000);
//   clearInterval(clear);
//for loop
var arr = [2, 7, 4, 0, 6];
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//forEach loop
// arr.forEach(function (i) {
//     console.log(i);
// })

//while loop
let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

//do-while loop
//at least once the loop is executed
// do {
//     console.log(arr[j]);
//     j++;
// } while (j<arr.length);

//break & continue

//continue simply means skip the current iteration and move on to the next one
//break means skip the entire loop and move to the base/outer condition

for(var i=0; i<arr.length; i++){
    if(i == 2 ){
        continue;//since i == 2: the element on the 2nd index will not be printed as its iteration is skipped
    }
       console.log(arr[i]);
 }
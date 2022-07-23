/*
primitive data types: null, undefined, boolean, var, string, symbols
non-primitive data types or reference data types : arrays, objects
*/

var arrays = [9, 5, 3.0987, 'reza', true];
console.log(arrays[4]);

const ex = [7, 45, 37, 45, 22, 0]
for (let i = 0; i < ex.length; i++) {
    //if [i] is not used, it will print the entire array in each iteration.
    const element = ex[i];
    console.log(element);
}
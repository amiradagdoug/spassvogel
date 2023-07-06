const bubbleSort = require('./bubblesort');

function duplikate(arr1, arr2) {
    let duplikarray = arr1.concat(arr2);
    let bubblesortarray = bubbleSort(duplikarray);
    let uniqarray = [];
    bubblesortarray.forEach((element) => {
        if (!uniqarray.includes(element)) {
            uniqarray.push(element);
        }
    });


    return uniqarray;



}
let arr1 = [2, 8, 0, 4, 3];
let arr2 = [8, 2, 1, 7, 5];
console.log("unsortiert und duplikate Array", arr1.concat(arr2));
duplikatearray = duplikate(arr1, arr2);
console.log("das Ziel", duplikatearray);

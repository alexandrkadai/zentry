// /**
// * FIND SUM OF ALL NUMBERS IN ARRAY
// */
// const numList = [1, 2, 5, 10, 2, 11, 23, 3];
// function makeSum(arr) {
//     let sum = 0;
//  for(let i= 0; i< arr.length; i ++){
//     sum += arr[i];
//  }
//  arr.reduce(sum,item => sum+item );
//  console.log(sum)
//  return sum;
    
// }

// console.log(makeSum(numList));
 
/** 
* count all letters in the string,
* return result in such format:
* {
*  a: 3,
*  b: 8,
*  g: 10,
*  ....,
* }
*
* your solution should be case insensitive,
* it means that letter "G" is the same as "g" and otherwise - "g" is the same as "G"
*/

const string = 'Some string for TeSting purpose';

const countFunc = (str) => {
    let newStr = str.toLowerCase();
    
    console.log(newStr)
    let result = {

    }

    for(let i= 0; i<newStr.length; i++){
        for(let j = 0; j<newStr.length; j++){
            if(newStr[i] === newStr){
                result =  {
                    newStr[i] : 
                }
            }
        }
    }

};


console.log(countFunc(string));

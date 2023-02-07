
/*The function takes a positive number as input and checks If the input is a negative number or a string, it returns the message 'Input a valid positive number'. If the input is correct, it performs some mathematical operation.
*/ 
function mindGame(number){

    if (number < 0 || typeof number != 'number'){
        return 'Input a valid positive number'
    }
    
    let result=(((number*3)+10)/2)-5;
    return result;
}



/*
The function will return 'Even' or 'Odd' based on the number of characters in the input string also If user don't give a valid input it will ask for valid string input. 
*/
function evenOdd(str){

    if (typeof str != 'string' || str.length==0){
        return 'Input must be a string';
    }

    if(str.length%2==0){
        return 'Even';
    }else{
        return 'Odd';
    }
}



/* 
The function isLGSeven(number)takes a number as an input and calculates the difference or double of the difference between the input number and 7, based on a certain condition. If the input is not a number, it returns an error message "Input a valid number". */
function isLGSeven(number){

    if (typeof number != 'number'){
        return 'Input a valid number'
    }

    let diff = number-7;
    if(diff<7){
        return diff 
    }else{
        return number*2;
    }
}



/*
This function checks the input array for negative elements and invalid data. It returns the number of negative elements or an error message if the input is not an array or contains invalid data. 
*/
function findingBadData(array){
    if (!Array.isArray(array)){
        return 'Input must be an array';
    }

    let badDataCount = 0;

    for (let i=0; i < array.length; i++){
        let element = array[i];
        if (typeof element != 'number'){
            return 'Input contains invalid data';
        }
        if (element < 0){
            badDataCount++;
        }
    }
    return badDataCount;
}




/*
This function calculates the total number of diamonds a person has, based on the number of gems they have of three different types. If any of the input parameters are not numbers, the function will return an error message of "Invalid Input".
*/
function gemsToDiamond(gem1,gem2,gem3){
    if (typeof gem1 !== 'number' || typeof gem2 !== 'number' || typeof gem3 !== 'number') {
        return 'Input must contain 3 integer values';
      }
      const forEachGem1NoOfDiamond = 21;
      const forEachGem2NoOfDiamond = 32;
      const forEachGem3NoOfDiamond = 43;
    
      let totalDiamond1 = gem1 * forEachGem1NoOfDiamond;
      let totalDiamond2 = gem2 * forEachGem2NoOfDiamond;
      let totalDiamond3 = gem3 * forEachGem3NoOfDiamond;
    
      let totalDiamond= totalDiamond1 + totalDiamond2 + totalDiamond3;
    
      if (totalDiamond > (1000 *2)) {
        return totalDiamond - 2000;
      } else {
        return totalDiamond;
      }
}
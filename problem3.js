
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

console.log(isLGSeven('antor'))
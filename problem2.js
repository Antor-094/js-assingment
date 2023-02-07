
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
console.log(evenOdd('antor n'))

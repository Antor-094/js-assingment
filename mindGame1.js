
// 
function mindGame (number){
    /* if user input negative number or a string */
    if (number < 0 || typeof number != 'number'){
        return 'Input a valid positive number'
    }

    /* if the input is ok then start these process */
    
    let result=(((number*3)+10)/2)-5;

    return result;

}

console.log(mindGame(5));
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

console.log(findingBadData([1,8,8,0,-9]));
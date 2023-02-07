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


console.log(gemsToDiamond(1,1,1))
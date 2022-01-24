/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
   
    let num2 = num;
    let cnt = 0;
    while(num2 !== 0) {
        if(num2 % 2 === 0) {
            parseInt(num2 = num2/2);
            cnt++;
        } else {
            num2 -= 1;
            cnt++;
        } 
   
    }
    
    return cnt;
    
};
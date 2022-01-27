/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let tmp = [start];
    let val = start;
    let answer = 0;
    
    for(let i = 1; i < n; i++) {
        val  += 2;
        tmp.push(val);
    }
    console.log(tmp);
    
    answer = tmp[0];
    for(let i = 1; i < tmp.length; i++) {
          answer = answer ^ tmp[i];        
    }
    
    return answer;
};
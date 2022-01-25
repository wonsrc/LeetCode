/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    
    let max = Math.max(...arr);
    let valid = 0;
    if(max === arr[0] || max === arr[arr.length-1]) return false;
    
    // 0  -> max
    for(let i = 0; i < arr.indexOf(max); i++) {
        if(arr[i] >= arr[i+1]) {
            return false;
        }
        valid++;
     
    }
    // max -> length
    for(let i = arr.indexOf(max); i < arr.length; i++) {
        if(arr[i] <= arr[i+1]) {
            return false;
        }
    valid++;
 
    
    }
    
    
    if(valid === arr.length) {
        return true;
    }
 
};
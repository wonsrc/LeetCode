/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let answer = 0;
    let cnt = 0;
    let arr = allowed.split("");
    let arr2 = [];
    for(let i = 0; i < words.length; i++) {
        arr2[i] = words[i].split("");
    }
    
    for(let i = 0; i < arr2.length; i++) {
        for(let j = 0; j < arr2[i].length; j++) {
            if(arr.includes(arr2[i][j])) {
                cnt++;
            }
        }
        if(cnt === arr2[i].length) {
            answer++;
            cnt = 0;
        } else {
            cnt = 0;
        }
    }
  
    return answer;
    console.log(answer);
};
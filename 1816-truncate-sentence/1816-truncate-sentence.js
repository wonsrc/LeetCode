/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let tmp = s.split(" ");
    let answer = [];
    
    for(let i = 0; i < k; i++) {
        answer[i] = tmp[i];
    }
    
    console.log(answer.join(" "));
    return answer.join(" ");
};
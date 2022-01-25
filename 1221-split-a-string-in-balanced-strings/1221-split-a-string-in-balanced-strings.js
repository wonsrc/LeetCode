/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let cnt = 0;
    let stack = [];
    let answer = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "R") {
            stack.push(s[i]);
            cnt++;
        } else {
            cnt--;
        }
        
        if(cnt === 0) {
            answer++;
        }
        
    }
    
    return answer;
    
};
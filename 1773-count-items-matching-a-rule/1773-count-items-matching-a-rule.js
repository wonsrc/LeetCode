/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    // ruleKey 와  ruleValue와 매칭되는 item 갯수 반환하기
    
    let answer = 0;
    let index = ["type", "color", "name"];
    let match = index.indexOf(ruleKey);
    
    for(let i = 0; i < items.length; i++ ) {
        if(items[i][match] === ruleValue) {
            answer++;
        }
    }
    
    return answer;
    
};
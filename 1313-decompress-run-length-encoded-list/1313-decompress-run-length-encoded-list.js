/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let cnt = 0;
    let tmp;
    let answer = [];
    let answer_fin = [];
    for(let i = 0; i < nums.length; i++) {
        if(i % 2 === 0) {
            cnt = nums[i];
        } else {
            tmp = new Array(cnt);
            tmp.fill(nums[i]);
            answer.push(tmp);
        }
    }
    
    answer_fin = answer.join(",").split(",");
    return answer_fin;
 
};
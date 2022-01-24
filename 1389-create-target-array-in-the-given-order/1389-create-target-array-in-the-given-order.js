/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    
    let target = new Array(index.length).fill(-1);
    
    for(let i = 0; i < index.length; i++) {
        if(target[index[i]] === -1) {
            target[index[i]] = nums[i];
            
            console.log(`target[${i}] : ${target[i]}`);
            console.log(target);
        } else {
                console.log(target[index[4]]);
            
            target.splice(index[i], 0, nums[i]);
            
            console.log(`target[${i}] : ${target[i]} ho`);
            console.log(target);
        }
    }
    return target.filter((target) => target >= 0);
    //console.log(target.filter((target) => target >= 0));
};
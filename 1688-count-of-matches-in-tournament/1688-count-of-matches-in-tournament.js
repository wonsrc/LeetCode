/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let answer = 0;
    let next_round = n;
    
    while(next_round >= 2) {
        
        if(next_round % 2 === 0) {
            console.log("even");
            console.log(next_round);
            next_round = parseInt(next_round/2);

            console.log("next_round :" + next_round);

            answer += next_round;
            console.log("answer : " + answer);

        } else if(next_round % 2 !== 0) {
            console.log(next_round);
            console.log("odd");
            next_round = parseInt(next_round/2) + 1;
            console.log("next_round :" + next_round);
            
            answer += next_round-1;
            console.log("answer : " + answer);
        }
        
    }
    
    return answer;
};
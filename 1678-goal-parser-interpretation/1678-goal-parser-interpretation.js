/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    
    let answer = "";
    let str = "";
   
    for(let i = 0; i < command.length; i++) {
        str += command[i];
        if(str === "G") {
            answer += "G";
            str = "";
        } else if (str === "()") {
            answer += "o";
            str = "";
        } else if (str === "(al)") {
            answer += "al";
            str = "";
        }
        
    
    }

    return answer;

    
};
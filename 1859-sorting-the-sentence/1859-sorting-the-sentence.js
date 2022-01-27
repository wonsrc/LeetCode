/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let answer = [];
    let answer_fin = "";
    const words = s.split(' ');
    

    for(let i = 0; i < words.length; i++) {
       answer[words[i][words[i].length-1] - 1] = (words[i]);
    }
        
    //answer = answer.join(' ');
    
    for(let i = 0; i < words.length; i++) {
        answer[i] = answer[i].substring(0,answer[i].length-1);
    }
    
    return answer.join(" ");
    
}
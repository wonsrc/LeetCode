/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let res;
    
     for(let i = 0; i < words.length; i++) {
         console.log(words[i]);
         res = check(words[i]);
         
         if(res) {
             return words[i];
         } 
     }
    
    return "";
    
    
};

function check(word) {
    for(let i = 0, j = word.length-1; i < parseInt((word.length)/2);i++, j--) {
        console.log(`word[i] : ${word[i]}, word[j] : ${word[j]}`);
        if(word[i] !== word[j]) {
            return false;
        }
    }
    
    return true;
        
}
/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let color_table = []
    let answer = 0;
    
    for(let i = 1; i <= rings.length; i+=2) {
        color_table[rings[i]] = {};
        color_table[rings[i]].R = 0;
        color_table[rings[i]].G = 0;
        color_table[rings[i]].B = 0;
    }
    
    
    for(let i = 1; i <= rings.length; i+=2) {
        if(rings[i-1] === "R") {
            color_table[rings[i]].R++;;
        } else if(rings[i-1] === "G") {
            color_table[rings[i]].G++;
        } else if(rings[i-1] === "B") {
            color_table[rings[i]].B++;
        }
    }
    
    for(let i = 0; i < color_table.length; i++) {
        console.log(color_table[i]);
        if(color_table[i] !== undefined && color_table[i].R >= 1 && color_table[i].G >= 1 && color_table[i].B >= 1) {
            answer++;
        }
    }
    
    return answer;
};
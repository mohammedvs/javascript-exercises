const sumAll = function(x, y) {
    if (x < 0 || y < 0)
    return "ERROR";
if (typeof x !== "number" || typeof y !== "number") 
    return "ERROR";

var finalSum = 0;
for(let i = 0; i < x + y; i++) {
    finalSum += i;
}
return finalSum; 

};

module.exports = sumAll

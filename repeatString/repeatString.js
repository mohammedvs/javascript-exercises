const repeatString = function(str, num) {
    let repeat = "";
    if(num < 0) {
        return "ERROR";
    }
   for(let i = 0; i < num; i++) {
       repeat += str;
   }
   return repeat;  

}

module.exports = repeatString

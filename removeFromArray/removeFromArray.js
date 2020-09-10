const removeFromArray = function(array, ...args) {
    var move = new Set(args);
    return array.filter(function(arg) {
        return !move.has(arg);
    });

}

module.exports = removeFromArray

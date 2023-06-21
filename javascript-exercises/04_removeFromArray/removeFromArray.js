const removeFromArray = function() {
    let sourceArray = arguments[0];
    let otherArgs = Array.from(arguments).slice(0)
    return sourceArray.filter(arg => !otherArgs.includes(arg) )
};

// Do not edit below this line
module.exports = removeFromArray;

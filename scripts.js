//Functions Passing Multiple Parameters

var makeSandwich = function (filling, spread) {
    console.log("Get bread");
    console.log("Spread the " + spread);
    console.log("Cut off the crusts");
    console.log("Put in a little bag");
};
makeSandwich("marmite", "butter");
makeSandwich("jam", "margerine");
makeSandwich("squeezy cheez", "butter");

var makeSandwich1 = function (filling, spread, breadType) {
    console.log("Get" + breadType);
    console.log("Spread the " + spread);
    console.log("Spread the " + filling);
    console.log("Cut off the crusts");
    console.log("Put in a little bag");
};
makeSandwich1("tuna and sweetcorn", "soya margarine", "rye bread");

var makeSandwich3 = function (filling) {
    return "A sandwich loving made with " + filling;
};
console.log(makeSandwich3("tofu mayonnaise"));

var makeSandwich2 = function (filling3, filling4) {
    var sandwich1 = "A sandwich with " + filling3;
    if (filling4) {
        sandwich1 += " and " + filling4;
    }
    return sandwich1;
};

console.log( makeSandwich2( "marmite", "cheese" ) );
console.log( makeSandwich2( "marmite" ) );
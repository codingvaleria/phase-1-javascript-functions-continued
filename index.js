// code your solution here
// function declaration
function saturdayFun(activity = "roller-skate") {

    return `This Saturday, I want to ${activity}!`;
}

console.log((saturdayFun("dance")));


// function expression

const mondayWork = function (todo = "go to the office") {
    return `This Monday, I will ${todo}.`
}
console.log(mondayWork("apply for VISA"));

function wrapAdjective(visualflair = "*") {

    const innerFunction = function (nameMe = "special") {

        return `You are ${visualflair}${nameMe}${visualflair}!`;
    };

    return innerFunction;

}

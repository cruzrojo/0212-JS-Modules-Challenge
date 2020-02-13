// Build a Manual Exponent Function in JavaScript
// ================================================

// 1. create code that performs a mathmatical argument for multiplying 2 to the 3rd power.
// 2. create a variable that holds a mathmatical argument for multiplying 2 to the 3rd power.
// 3. create a function that allows for changing the number and the power that it is raised to.
// 4. create a class that holds the values that have been raised to a power...

console.log(Math.pow(2, 4))

let numPow = Math.pow(2, 4)
console.log(numPow)

function funcPow(a, b) {
    return Math.pow(a, b);
}

console.log(funcPow(2, 4))

class ClassPower {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    returnPow() {
        return Math.pow(this.a, this.b)
    }
}

let myPow = new ClassPower(2, 4)
console.log(myPow.returnPow())

// ==================================================================
// Jordan's solution for this problem...
// ==================================================================

const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (total, currentValue) => total * currentValue;
    return items.reduce(reducer);
}

console.log(toThePowerOf(2, 3));
console.log(toThePowerOf(3, 3));
console.log(toThePowerOf(10, 120));
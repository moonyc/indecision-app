// function that squares a number
function square (x) {
    return x * x 
}

console.log(square(2))

// this function return a single expression
// so I used the new synthetic syntax

const squareArrow = (x) => x * x 

console.log(squareArrow(3))

const getFirstName = (name) => name.split(" ")[0]

console.log(getFirstName("Sasha Micetti"))


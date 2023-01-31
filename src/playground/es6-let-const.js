var nameVar = "Sasha"
//redefining 
var nameVar= "Sashotti"
console.log("nameVar", nameVar)

let nameLet = "Sashimi"
//riassignment
nameLet ="Sashi"
console.log("nameLet","Sashi" )

function getPetName() {
    //the scope of this variable isn't available in the parent global scope
    const petName ="Sasha"
    return petName
}

//we can't access pet name asis outside
// here we are accessing petName stored in the variable down below, not inside the function right above.
const petName = getPetName()

console.log(petName)

//Block scoping:

const fullName= "Sasha Sashottini"
let firstName

if(fullName) {
   firstName = fullName.split(' ')[0]
   const lastName = fullName.split(' ')[1]
   console.log(lastName)
}

console.log(firstName)
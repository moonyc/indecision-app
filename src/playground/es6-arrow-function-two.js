// arguments object - no longer bound with arrow functions

const add = function(a,b) {
    //we no longer have access to arguments
    console.log(arguments)
   return a + b
}
console.log(add(22,1))


// this keaywork - no longer bound

const user = {
    name: "sasha",
    cities:['berlin', 'paris', 'sashim'],
    // new syntax
    printPlacesLived() {
        return this.cities.map((city) =>  this.name + " has lived in " + city)
        // here I have access to this.name and this.cities
        //this.name is accessible here
        console.log(this.name)
        console.log(this.cities)
        //this.name isn't accessible down below
        //i can use a const that = this to access the this value in a nested function
        // or I can use an arrow function, as infact i did
        // this.cities.forEach( (city) =>  {
        //       console.log(this.name + ' has lived in ' + city)
        // })
        return cityMessages
    }
}

console.log(user.printPlacesLived())

const multiplier = {
    numbers : [1,2,3,4,5,6],
    multiplyBy : 7,
    multiply () {
      return this.numbers.map((number) => this.multiplyBy * number)
    }
}

console.log(multiplier.multiply())
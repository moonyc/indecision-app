

class Person {
    // the constructor function is the function that gets called when
    // we make a new instance and it get called with all of the arguments we pass in
    constructor(name = "Anon", age = 0) {
        // here we have a regulare function body
        // here we access this
        this.name = name 
        this.age = age
    }
    // defining a new method, same syntax as constructor, different name
    getGreeting() {
        // return "hi " + this.name
        return `hi, I am ${this.name}`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        // super refers to the parent class
        // calling it as a function is like directly calling Person()
       super(name, age)
       this.major = major
    }
    hasMajor() {
        //!'' -> true
        // !!'' -> false
        // !!undefined -> false
        // !!'sasha' -> true
        // this.major is a string or undefined, so if I flip it two times
        // it will result true if it's a string or false if it's undefined 
        return !!this.major;
        }
        getDescription(){
            let description = super.getDescription()
            if(this.hasMajor()){
               description += ` Their major is ${this.major}`
            }
            return description
        }
}


class Traveler extends Person {
    constructor(name, age, homeLocation) {
       super(name, age)
       this.homeLocation = homeLocation
       
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting()

        if(this.hasHomeLocation()) {
            greeting = `Hi, I am ${this.name} and I'm visiting from ${this.homeLocation}`
        }
        return greeting
    }

}
const me = new Traveler('Sasha', 6, 'Casetta');
//methods are accessible in the individual instancec of the class
console.log(me.getGreeting());

const other = new Traveler( )
console.log(other.getGreeting())
// let obj = {
//     a:1,
//     b:"Jalal"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// }; 

// rabbit._proto__ = animal;  //set rabbit.[[prototype]] = animal

class Animal{
    constructor(name) {
        this.name = name
        console.log("Object is created..")
    }
    eats(){
        console.log("Kha raha hon")
    }
    jumps(){
        console.log("jump kr raha hon")
    }
}
// use of extend key word in inheritence 
class Lion extends Animal {
constructor(name){ 
super(name)

    console.log("Ibject is created Lion is a ScareFase")
}
eats(){
    super.eats()
    console.log("Kha raha hon roar")
}

}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("ScarFace")
console.log(l)
 
//use of instanceof operator
// Object is created..
// script.js:44 Animal {name: 'Bunny'}
// script.js:20 Object is created..
// script.js:34 Ibject is created Lion is a ScareFase
// script.js:47 Lion {name: 'ScarFace'}
// l instanceof Lion
// true
// a instanceof lion
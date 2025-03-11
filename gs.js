class User{
//getter setter
    constructor(name){
        //invlokes the setter
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if (value.length < 4){
            console.log("name is too short.");
            return;
        }
        this._name = value;
    }
}
let user = new User("Ali");
console.log(user.name);
user = new User("Jalal"); //name is too short.
console.log(user)
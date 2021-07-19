var Person = function(firstAndLast) {
    let [firstName, lastName] = firstAndLast.split(" ");
  
    this.getFirstName = () => firstName;
    this.getLastName = () => lastName;
    this.getFullName = () => firstName + " " + lastName;
  
    this.setFirstName = (first) => firstName = first;
    this.setLastName = (last) => lastName = last;
    this.setFullName = (firstAndLast) => [firstName, lastName] = firstAndLast.split(" ");
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getLastName());
console.log(bob.getFirstName());

bob.setFirstName("Glibo");
bob.setLastName("Glibavic");
console.log(bob.getFullName());

bob.setFullName("Cisto Cistunac");
console.log(bob.getFullName());



// As a class
class PersonClass {
    #firstName;
    #lastName;

    constructor (firstAndLast) {
        let [firstName, lastName] = firstAndLast.split(" ");
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    getFirstName = () => this.#firstName;
    getLastName = () => this.#lastName;
    getFullName = () => this.#firstName + " " + this.#lastName;
  
    setFirstName = (first) => this.#firstName = first;
    setLastName = (last) => this.#lastName = last;
    setFullName = (firstAndLast) => [this.#firstName, this.#lastName] = firstAndLast.split(" ");
}

var bobo = new PersonClass('Bob Ross');
console.log(bobo.getFullName());
console.log(bobo.getLastName());
console.log(bobo.getFirstName());

bobo.setFirstName("Glibo");
bobo.setLastName("Glibavic");
console.log(bobo.getFullName());

bobo.setFullName("Cisto Cistunac");
console.log(bobo.getFullName());

console.log(bobo.firstName);
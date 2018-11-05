class Person {
  constructor(name, height) {
    this.name = name;
    this.height = height || 5
  }

  sayHi() {
    console.log('hi')
  }

  sayCatchPhrase() {
    console.log(this.catchPhrase)
  }

}

class Fonzi extends Person{
  constructor() {
    this.catchPhrase = 'ehhh'
    this.cool = true;
  }
}

let bob = new Person(bob)
let fonz = new Fonzi
let martin = new Person
martin.catchPhrase = 'wazzzup'


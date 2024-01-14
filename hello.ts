import Person, { sayHello } from './person.ts'

const john: Person = {
  lastName: 'Doe',
  firstName: 'John',
}

console.log(sayHello(john))

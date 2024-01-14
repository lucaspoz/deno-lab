import { assertEquals } from '$std/assert/mod.ts'
import Person, { sayHello } from './person.ts'

Deno.test('sayHello function', () => {
  const john: Person = {
    lastName: 'Doe',
    firstName: 'John',
  }

  assertEquals('Hello, John!', sayHello(john))
})

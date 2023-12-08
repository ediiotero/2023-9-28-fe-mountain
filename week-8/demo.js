//https://www.youtube.com/watch?v=khuDeNwXkfI
//https://www.youtube.com/watch?v=ZYa_NiOUTQo
//https://www.youtube.com/watch?v=jM0WcyQWMSM

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static sleep(number) {
        console.log(`Slept ${number} hours`)
    }

    hello() {
        console.log(`Hello my name is ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, age, gpa) {
        super(name, age)
        this.gpa = gpa
    }

    hello() {
        super.hello()
        console.log(`My gpa is ${this.gpa}`)
    }
}

class Teacher extends Person {
    constructor(name, age, classSize) {
        super(name, age)
        this.classSize = classSize
    }

    hello() {
        console.log(`My class size is ${this.classSize}`)
    }
}

const person1 = new Person("Bruce", 33)
console.log(person1)
const student1 = new Student("Toby", 3, "3.0")
console.log(student1)
const teach1 = new Teacher("Stephanie", 44, 10)
console.log(teach1)

// person1.hello()
student1.hello()
// teach1.hello()

Person.sleep(4)
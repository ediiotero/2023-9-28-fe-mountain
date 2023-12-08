// Write a class called Temperature that will take fahrenheit as a property this will be a number
// the number should be between 212 and -459.67
// Temperature should have 2 methods one for converting fahrenheit to celsius-> ((this.fahrenheit - 32)*5)/9
// and another to convert celsius to kelvin->   celsius + 273.15
// create 2 new object with this class

////////////////////////



const shapes = ['circle', 'square', 'triangle', 'rectangle', 'oval']
const colors = ['red', 'green', 'blue', 'yellow']

const groups = []

colors.forEach(color => {
    shapes.map(shape => groups.push({shape, color}))
})

// console.log('Groups: ', groups)

function shuffle(array) {
    const groupOne = []
    const groupTwo = []

    while(array.length > 0) {
        const random1 = Math.floor(Math.random() * array.length)
        const getItem1 = array.splice(random1, 1)
        const random2 = Math.floor(Math.random() * array.length)
        const getItem2 = array.splice(random2, 1)

        groupOne.push(getItem1)
        groupTwo.push(getItem2)
    }

    return [groupOne.flat(), groupTwo.flat()]
}

const deck = shuffle(groups)
console.log('Deck 1: ', deck[0])
console.log('Deck 2: ', deck[1])
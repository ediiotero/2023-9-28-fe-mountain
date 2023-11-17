// Callbacks

const display = item => console.log(item)

const myCalculator = (num1, num2, cb) => {
    const sum = num1 + num2;
    cb(sum)
}

// myCalculator(5, 5, display)

// Promise
// more here: https://www.w3schools.com/js/js_promise.asp

const myDisplay = item => console.log(item)

const myPromise = new Promise((resolve, reject) =>{
    const x = 0

    if(x === 0) {
        resolve('OK')
    } else {
        reject('Error')
    }
})

// myPromise.then(value => myDisplay(value)).catch(value => myDisplay(value))


// ========================

// Fetch Api 

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const myForm = document.getElementById('myForm')
const email = document.getElementById('email')
const name = document.getElementById('name')
const content = document.getElementById('content')



const buildInfoList = () => {
    content.innerHTML = ''
    emailInfo.forEach(person => {
        const infoBox = document.createElement('div')
        infoBox.classList.add('info-box')

        infoBox.innerText = `${person.email} ${person.name}`
        content.append(infoBox)
    })
}

buildInfoList()

myForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = {
        email: email.value,
        name: name.value
    }

    emailInfo.push(data)
    console.log(emailInfo)
    buildInfoList()
    myForm.reset()
})
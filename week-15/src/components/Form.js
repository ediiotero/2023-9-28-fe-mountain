import React, {useState} from 'react'

const initalState = {
    title: '',
    body: ''
}

const Form = () => {

    const [formData, setFormData] = useState(initalState)

    const onChange = event => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const postData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        console.log(data)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        postData()
        setFormData(initalState)
    }

  return (
    <div>
        <h2>Post Form</h2>
        <form onSubmit={onSubmit}>
            <div>
                <input 
                    type="text"
                    placeholder='Enter title'
                    name='title'
                    value={formData.title} 
                    onChange={onChange}
                 />
            </div>
            <div>
                <input 
                    type="text"
                    placeholder='Enter body'
                    name='body'
                    value={formData.body} 
                    onChange={onChange}
                 />
            </div>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form
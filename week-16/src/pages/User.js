import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const fetchUser = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
        const data = await res.json()
        setUser(data)
    }

    useEffect(() => {
        fetchUser()
    }, [])

  return (
    <div>
        <div>Hello {user.name}</div>
        <p>Your email is: {user.email}</p>
        <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  )
}

export default User
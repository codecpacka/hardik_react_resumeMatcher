import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {
  const history = useHistory()

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const register = () => {
    const { name, email, password, reEnterPassword } = user
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message)
        history.push("/login")
      })
    } else {
      alert("invalid input")
    }
  }

  return (
    <div className="Register">
      {/* {console.log("User", user)} */}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="your Name"
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="your Email"
        onChange={handleChange}
      />
      <br></br>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="your Password"
        onChange={handleChange}
      />
      <br></br>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      />
      <br></br>
      <input type="button" onClick={register} />
      Register
      <div>or</div>
      <input type="button" onClick={() => history.push("/login")} />
      Login
    </div>
  )
}

export default Register

import React, { useState } from "react"
import "./resume.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
export var userResume
const resume = async () => {
  const id = JSON.parse(localStorage.getItem("user_values"))._id
  userResume = await (
    await axios.get(`http://localhost:9002/resume/${id}`)
  ).data
  console.log(userResume)
}

const Resume = ({ userResume }) => {
  const history = useHistory()

  return (
    <div className="resume">
      <h1>YOUR RESUME IS COMPLETED</h1>
      <h1>{userResume?.data}</h1>
      <div className="button" onClick={resume}>
        get data
      </div>
      <div className="button" onClick={() => history.push("/login")}>
        Logout
      </div>
      {/* <input type="button" onClick={() => history.push("/login")} />Login */}
    </div>
  )
}

export default Resume

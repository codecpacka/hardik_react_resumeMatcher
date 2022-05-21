import React, { useState } from "react"
import "./homepage.css"
import { useHistory } from "react-router-dom"

const Homepage = ({ setLoginUser }) => {
  const history = useHistory()

  return (
    <div className="homepage">
      <h1>You are at Homepage</h1>
      {/* <div className="button" onClick={() => setLoginUser({})} >Logout</div> */}
      {/* <input type="button" onClick={() => history.push("/resume")} />Resume */}
      <div className="button" onClick={() => history.push("/personal_info")}>
        Resume Maker
      </div>
    </div>
  )
}

export default Homepage

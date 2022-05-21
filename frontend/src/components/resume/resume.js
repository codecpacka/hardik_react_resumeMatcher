import React, { useState } from "react";
import "./resume.css"
import { useHistory } from "react-router-dom"

const Resume = ({ setLoginUser }) => {
    const history = useHistory()

    return (
        <div className="resume">
            <h1>YOUR RESUME IS COMPLETED</h1>
            <div className="button" onClick={() => history.push("/login")}>Logout</div>
            {/* <input type="button" onClick={() => history.push("/login")} />Login */}
        </div>
    )
}

export default Resume
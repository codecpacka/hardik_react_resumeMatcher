import React, { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom"

const Your_Education_Info = ({ setYour_Education_InfoUser }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        school_name: "",
        school_percentage: "",
        college_name: "",
        college_percentage: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }

    const Your_Education_Info = () => {
        axios.post("http://localhost:9002/your_education_info", user)
            .then(res => {

                // setYour_Education_Info(res.data.user)
                history.push("/")
            })
    }

    return (
        <div className="Your_Education_Info" >
            <h1>Your Education Info</h1>
            <input type="text" name="school_name" value={user.school_name} placeholder="Enter your School Name" onChange={handleChange} /><br></br>
            <input type="number" name="school_percentage" value={user.school_percentage} placeholder="Enter your School Percentage" onChange={handleChange} /><br></br>
            <input type="text" name="college_name" value={user.college_name} placeholder="Enter your College Name" onChange={handleChange} /><br></br>
            <input type="number" name="college_percentage" value={user.college_percentage} placeholder="Enter your College Percentage" onChange={handleChange} /><br></br>

            <input type="button" onClick={() => history.push("/personal_info")} />Personal Info
            <input type="button" onClick={() => history.push("/work_exp")} />Work Experience


        </div>



    )
}

export default Your_Education_Info
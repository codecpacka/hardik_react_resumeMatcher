import React, { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom"

const Work_Exp = ({ setWork_ExpUser }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        comapny_name: "",
        experience_of_company: "",

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }

    const Work_Exp = () => {
        axios.post("http://localhost:9002/work_exp", user)
            .then(res => {

                // setWork_Exp(res.data.user)
                history.push("/")
            })
    }

    return (
        <div className="Work_Exp" >
            <h1>Work Experience</h1>
            <input type="text" name="comapny_name" value={user.company_name} placeholder="Enter your company Name" onChange={handleChange} /><br></br>
            <input type="number" name="experience_of_company" value={user.experience_of_company} placeholder="Experience Of Company In Year" onChange={handleChange} /><br></br>

            <input type="button" onClick={() => history.push("/your_education_info")} />Your Education Info
            <input type="button" onClick={() => history.push("/hobbis")} />Hobbis

        </div>



    )
}

export default Work_Exp
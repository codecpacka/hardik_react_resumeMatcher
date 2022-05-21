import React, { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom"

const Hobbis = ({ setHobbis }) => {

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

    const Hobbis = () => {
        axios.post("http://localhost:9002/hobbis", user)
            .then(res => {

                // sethobbis(res.data.user)
                history.push("/")
            })
    }

    return (
        <div className="Hobbis" >
            <h1>Hobbies</h1>
            <input type="text" name="first_name" value={user.first_name} placeholder="Enter your Favourite Sports" onChange={handleChange} /><br></br>
            <input type="text" name="second_name" value={user.second_name} placeholder="Enter your First Game Name" onChange={handleChange} /><br></br>
            <input type="text" name="third_name" value={user.third_name} placeholder="Enter your Second Game Name" onChange={handleChange} /><br></br>
            <input type="text" name="book_name" value={user.book_name} placeholder="Enter your Favourite Book Name" onChange={handleChange} /><br></br>
            <input type="button" onClick={() => history.push("/work_exp")} />Work Experience
            <input type="button" onClick={() => history.push("/resume")} />Submit

        </div>



    )
}

export default Hobbis
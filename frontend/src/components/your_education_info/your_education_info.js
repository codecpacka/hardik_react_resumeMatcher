import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Your_Education_Info = ({ setYour_Education_InfoUser }) => {
  const history = useHistory()

  const [userEducationInfo, setUser] = useState({
    school_name: "",
    school_percentage: "",
    college_name: "",
    college_percentage: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...userEducationInfo,
      [name]: value,
    })
  }

  const Your_Education_Info = () => {
    userEducationInfo.user_id = JSON.parse(
      localStorage.getItem("user_values")
    )._id
    axios
      .post("http://localhost:9002/your_education_info", userEducationInfo)
      .then((res) => {
        // setYour_Education_Info(res.data.user)
        history.push("/work_exp")
      })
  }

  return (
    <div className="Your_Education_Info">
      {console.log("UserEducationInfo", userEducationInfo)}
      <h1>Your Education Info</h1>
      <input
        type="text"
        name="school_name"
        value={userEducationInfo.school_name}
        placeholder="Enter your School Name"
        onChange={handleChange}
      />
      <br></br>
      <input
        type="number"
        name="school_percentage"
        value={userEducationInfo.school_percentage}
        placeholder="Enter your School Percentage"
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        name="college_name"
        value={userEducationInfo.college_name}
        placeholder="Enter your College Name"
        onChange={handleChange}
      />
      <br></br>
      <input
        type="number"
        name="college_percentage"
        value={userEducationInfo.college_percentage}
        placeholder="Enter your College Percentage"
        onChange={handleChange}
      />
      <br></br>
      <input
        type="button"
        value="Personal Info"
        onClick={() => history.push("/personal_info")}
      />
      <input
        type="button"
        value="Work Experience"
        onClick={Your_Education_Info}
      />
    </div>
  )
}

export default Your_Education_Info

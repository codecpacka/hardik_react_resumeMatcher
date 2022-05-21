import React, { useState } from "react"
import "./personal_info.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Personal_Info = ({ setPersonal_InfoUser }) => {
  const history = useHistory()

  const [userPersonalInfo, setUser] = useState({
    tempName: "",
    tempMobileNumber: "",
    TempAge: "",
    tempEmail: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...userPersonalInfo,
      [name]: value,
    })
  }

  const personal_info = () => {
    userPersonalInfo.user_id = JSON.parse(
      localStorage.getItem("user_values")
    )._id
    axios
      .post("http://localhost:9002/personal_info", userPersonalInfo)
      .then((res) => {
        console.log(res.userPersonalInfo)

        history.push("/your_education_info")
        // setPersonal_InfoUser(res.data.userPersonalInfo)
      })
  }
  //   localStorage.setItem("personal_info", user)
  console.log(JSON.parse(localStorage.getItem("user_values")))
  const idField = document.querySelector('[name = "user_id"]')
  console.log(idField)
  return (
    <div className="Personal_Info">
      {console.log("UserPersonalInfo", userPersonalInfo)}
      <h1>Personal Info</h1>
      <input
        type="text"
        name="tempName"
        value={userPersonalInfo.tempName}
        placeholder="Enter your Name"
        onChange={handleChange}
      />
      <br></br>
      <input
        type="number"
        name="tempMobileNumber"
        value={userPersonalInfo.tempMobileNumber}
        placeholder="Enter your Mobile number"
        onChange={handleChange}
      />
      <br></br>
      <input
        type="number"
        name="TempAge"
        value={userPersonalInfo.TempAge}
        placeholder="Enter your Age"
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        name="tempEmail"
        value={userPersonalInfo.tempEmail}
        placeholder="Enter your Email"
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <input type="button" value="Back" onClick={() => history.push("/")} />

      <input
        type="button"
        value="education info"
        // onClick={() => history.push("/your_education_info")}
        onClick={personal_info}
      />
      {/* <input
        type="button"
        onClick={personal_info}
        value="submit personal info"
      /> */}
    </div>
  )
}

export default Personal_Info

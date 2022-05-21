import express from "express"
// const express =require("express")
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(
  "mongodb://localhost:27017/loginRegisterDB",
  {
    useNewUrlParser: true,
    useUnifiedtopology: true,
  },
  () => {
    console.log("DB connected")
  }
)

// const User = require("/user.model")
///writing changes above
const personalInfo = new mongoose.Schema({
  tempName: {
    type: String,
  },
  tempMobileNumber: {
    type: Number,
  },
  tempAge: {
    type: Number,

    min: 18,
    max: 60,
  },
  tempEmail: {
    type: String,
  },
})
// const Pinfo = new mongoose.model("Pinfo", personalInfo)
// const ram = new Pinfo({ tempName: "pal" })
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  // personalInfo: {},
  personalInfo: {},
})
//personal info schema

const User = new mongoose.model("User", userSchema)
//Routes
app.post("/login", (req, res) => {
  // URL BASE POST APP
  const { email, password } = req.body
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        // console.log(user)

        res.send({ message: "Login successfull", user: user })
      } else {
        res.send({ message: "password did not match" })
      }
    } else {
      res.send({ message: "User not found" })
    }
  })
})

app.post("/register", (req, res) => {
  // URL BASE POST APP
  const { name, email, password } = req.body
  User.findOne({ email: email }, (err, user) => {
    // check email
    if (user) {
      res.send({ message: "user already registerd" })
    } else {
      const user = new User({
        name: name,
        email: email,
        password: password,
      })
      user.save((err) => {
        if (err) {
          res.send(err)
        } else {
          res.send({ message: "Successfully Registered , plese Login " })
        }
      })
    }
  })
})
//personal_info post route
app.post("/personal_info", async (req, res) => {
  const { tempName, tempMobileNumber, tempAge, tempEmail, user_id } = req.body
  // console.log(tempName, user_id)
  console.log(req.body)
  // const newPersonalInfo = new personalInfo({
  //   tempName: tempAge,
  //   tempMobileNumber: tempMobileNumber,
  //   tempAge: tempAge,
  //   tempEmail: tempEmail,
  // })

  // User.findByIdAndRemove({ _id: user_id }, { name: "codecpacka" })
  // const count = await User.findByIdAndRemove({ _id: user_id })
  delete req.body.user_id
  // console.log(pinfo)
  console.log(req.body)

  User.updateOne({ _id: user_id }, { $set: { personalInfo: req.body } }).then(
    (result, err) => {
      return res.status(200).json({ data: result, message: "Value Updated" })
    }
  )
})

app.listen(9002, () => {
  console.log("BE started at port 9002")
})

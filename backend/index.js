import express from "express"
// const express =require("express")
import cors from "cors"
import mongoose from "mongoose"
import {
  registeration,
  login,
  educatonInfo,
  personalInfo,
  resume,
} from "./userController.js"

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
//  imp: all router
//Routes login
app.post("/login", login)
//route register
app.post("/register", registeration)
// personal education post route
app.post("/your_education_info", educatonInfo)

//personal_info post route
app.post("/personal_info", personalInfo)
//resume Router
app.get("/resume/:id", resume)

// note:  ports
app.listen(9002, () => {
  console.log("BE started at port 9002")
})

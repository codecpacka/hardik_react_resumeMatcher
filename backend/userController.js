import cors from "cors"
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  // personalInfo: {},
  personalInfo: {},
  educationInfo: {},
})
//personal info schema

const User = new mongoose.model("User", userSchema)

export const registeration = async (req, res) => {
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
}

////login
export async function login(req, res) {
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
}
///educaton info controller
export const educatonInfo = async (req, res) => {
  // console.log(tempName, user_id)
  const { user_id } = req.body
  console.log(req.body)

  delete req.body.user_id
  // console.log(pinfo)
  console.log(req.body)

  User.updateOne({ _id: user_id }, { $set: { educationInfo: req.body } }).then(
    (result, err) => {
      return res.status(200).json({ data: result, message: "Value Updated" })
    }
  )
}

//personal info controller
export const personalInfo = async (req, res) => {
  const { user_id } = req.body

  console.log(req.body)

  delete req.body.user_id
  // console.log(pinfo)
  console.log(req.body)

  User.updateOne({ _id: user_id }, { $set: { personalInfo: req.body } }).then(
    (result, err) => {
      return res.status(200).json({ data: result, message: "Value Updated" })
    }
  )
}
//resume controller
export const resume = async (req, res) => {
  try {
    console.log("got inside")
    const { id } = req.params
    const user = await User.findById(id)
    console.log(user)
    res.send(user)
  } catch (error) {
    console.log("error found" + error)
  }
}

export default registeration

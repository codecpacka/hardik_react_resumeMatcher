import './App.css';
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import Personal_Info from "./components/personal_info/personal_info"
import Your_Education_Info from './components/your_education_info/your_education_info';
import Work_Exp from './components/work_exp/work_exp';
import Hobbis from './components/hobbis/hobbis';
import Resume from './components/resume/resume';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";


function App() {

  const [user, setLoginUser] = useState({

    // name: "",
    // email: "",
    // password: "",
  })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/personal_info">
            <Personal_Info />
          </Route>
          <Route path="/your_education_info">
            <Your_Education_Info />
          </Route>
          <Route path="/work_exp">
            <Work_Exp />
          </Route>
          <Route path="/hobbis">
            <Hobbis />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

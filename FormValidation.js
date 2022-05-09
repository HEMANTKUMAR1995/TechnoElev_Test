import React, { useState } from "react";
import "./FormValidation.css";
import "./Table"
function FormValidation(props) {
  const [userData, setuserData] = useState({
    userName: "",
    UserEMail: "",
    passWord: "",
  });

  let setData = (event) => {
    setuserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    console.log(userData);
  };

  let saveData = () => {
    if (userData) {
      if (/^[a-zA-Z]\w{3,14}$/.test(userData.userName)) {
        console.log("Username validated");
      } else {
        document.getElementById("inValiduser").style.display = "block";
      }
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          userData.UserEMail
        )
      ) {
        console.log("Email validated");
      } else {
        document.getElementById("inValidemail").style.display = "block";
      }
      if (/^[A-Za-z]\w{7,14}$/.test(userData.passWord)) {
        console.log("password validated");
      } else {
        document.getElementById("inValidpass").style.display = "block";
      }
      return props.DatabankInParent(userData);
    }

    setuserData({
      userName: "",
      eMail: "",
      passWord: "",
    });
  };
  return (
    
    <div className="container">
      <form className="cssStyle">
        <h1>Login Form</h1>
        <label>Username</label>
        <br/>
        <input
          id="user"
          type="text"
          name="userName"
          value={userData.userName}
          placeholder="Enter your UserName"
          onChange={setData}
        ></input>
        <br/>
        <p
          id="inValiduser"
          style={{ display: "none", color: "red", fontSize: "13px" }}
        >
          Invalid UserName
        </p>
        <label>Email</label>
        <br/>
        <input
          id="mail"
          type="email"
          name="eMail"
          value={userData.eMail}
          placeholder="Enter your Email"
          onChange={setData}
        ></input>
        <br/>
        <p
          id="inValidemail"
          style={{ display: "none", color: "red", fontSize: "13px" }}
        >
          The Email you Entered is Invalid
        </p>
        <label>Password</label>
        <br/>
        <input
          id="pass"
          type="password"
          name="passWord"
          value={userData.passWord}
          placeholder="Enter your passWord"
          onChange={setData}
        ></input>
        <br/>
        <p
          id="inValidpass"
          style={{ display: "none", color: "red", fontSize: "13px" }}
        >
          Invalid Password
        </p>
        <button onClick={saveData}>Login</button>
      </form>
    </div>
  );
}

export default FormValidation;

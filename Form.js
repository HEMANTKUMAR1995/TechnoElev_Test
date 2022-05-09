import React, { useState } from "react";

function Form() {
  const [userData, setuserData] = useState({
    userEmail: "",
    userPassword: "",
  });

  let AddUser = () => {
    console.log(userData);
  };

  // let isValidCredential = () => {
  //   if (userData.userEmail == (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
  //   }
  //   else if(userData.userPassword==(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/))
  //   {
      
  //     }
  // };
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      AddUser();
      setuserData({
        userEmail: "",
        userPassword:""
      })
    }}>
      <div className="container">
        <input
          name="userEmail"
          value={userData.userEmail}
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) =>
            setuserData({
              ...userData,
              userEmail: e.target.value,
            })
          }
        />
          <input
          name="userPassword"
          type="password"
          value={userData.userPassword}
          placeholder="Enter Your Password"
          onChange={(e) =>
            setuserData({
              ...userData,
              userPassword: e.target.value,
            })
          }
        />
        <input type="submit" value="submit" />
      </div>
    </form>
  );
}
export default Form;

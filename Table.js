import React from "react";
// import "FormValidation"
import FormValidation from './FormValidation';

function Table(props) {
  return (
    <div>
      <table>
        <tr>
          <th>UserName</th>
          <th>Password</th>
        </tr>
        {props.sendData.map((val, idx) => {
          return (
            <tr key={idx}>
              <td>{val.userName}</td>
              <td>{val.passWord}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;

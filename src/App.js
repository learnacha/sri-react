import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextBox from "./atoms/text-box";
import Label from "./atoms/label";

function App() {
  const [tbFName, setTBFName] = useState("");
  const [tbLName, setTBLName] = useState("");
  const [tbPwd, setTBPwd] = useState("");
  const [tbEmail, setTBEmail] = useState("");

  const tbFNameOnChange = e => {
    setTBFName(e.target.value);
  };

  const tbLNameOnChange = e => {
    setTBLName(e.target.value);
  };

  const tbPwdOnChange = e => {
    setTBPwd(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log("fname", tbFName);
    console.log("lname", tbLName);
    console.log("password", tbPwd);
    console.log("email", tbEmail);
  };

  const tbEmailOnChange = e => {
    setTBEmail(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={e => handleFormSubmit(e)}>
        <div>
          <Label lblName="First Name" lblFor="fname" />
          <TextBox tbOnChange={tbFNameOnChange} tbFor="fname" tbVal={tbFName} />
        </div>
        <div>
          <Label lblName="Last Name" lblFor="lname" />
          <TextBox tbOnChange={tbLNameOnChange} tbFor="lname" tbVal={tbLName} />
        </div>
        <div>
          <Label lblName="Password" lblPassword="lpwd" />
          <TextBox
            tbOnChange={tbPwdOnChange}
            tbFor="lpwd"
            tbVal={tbPwd}
            tbType="password"
          />
        </div>
        <div>
          <Label lblName="Email" lblFor="lemail" />
          <TextBox
            tbOnChange={tbEmailOnChange}
            tbFor="lemail"
            tbVal={tbEmail}
            tbType="email"
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default App;

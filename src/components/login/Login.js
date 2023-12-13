import React, { useState} from "react";
import { Button, Modal} from 'antd';
import '../styles/LoginStyle.css';

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { confirm } = Modal;
  const [isModalVisible, setIsModalVisible] = useState(false);

  // User Login info
  const database = [
    {
      username: "admin",
      password: "12345"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
 
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    console.log(document.forms[0],'djedheui');
    console.log(uname,pass);
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
   
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    confirm({
        title: 'Success!',
        content:
          'Logged in successfully',
        async onOk() {
          try {
            return new Promise((resolve, reject) => {
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            });
          } catch (e) {
            return console.log('Oops errors!');
          }
        },
        onCancel() {},
      });
  };
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          {/* <input type="submit"/> */}
          <Button type="secondary" onClick={() => {
          setIsModalVisible(true);
        }}>
          Submit
      </Button>
        <Modal title="Modal Title"
          visible={isModalVisible}
          onOk={() => {
            setIsModalVisible(false)
            
          }}
          onCancel={() => {
            setIsModalVisible(false);
          }}>
          <p>Logged in successfully</p>
          
        </Modal>
      
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ?<a></a>: renderForm}
        
      </div>
    </div>
  );
}

export default Login;
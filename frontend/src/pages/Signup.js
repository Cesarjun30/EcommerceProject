import React, { useState } from "react";
import loginImg from "../images/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";

const Signup = () => {

  const [data, setData] = useState({
    firstname: "",
    lastname : "",
    email : "",
    password : "",
    confirmpassword : ""

  })
  console.log(data)
  
  const handleOnChange = (e) => {
    
      const {name, value} = e.target
    setData((preve)=>{
      return{
        ...preve,
        [name] : value

      }

    })
  }
   
  console.log(process.env.REACT_APP_SERVER_DOMIN)
  const handleSubmit = async(e) => {

    e.preventDefault()
    const {firstname, lastname, email, password, confirmpassword} = data;
    
    if (firstname && lastname  && email && password && confirmpassword){
      const  fetchData = await fetch (`${process.env.REACT_APP_SERVER_DOMIN}/signup`, {
        method :"POST",
        headers: {
          "content-type" : "application/json"
        },

        body : JSON.stringify(data)
      }) 

      const dataRes = await fetchData.json()
      console.log(dataRes)

      if(password === confirmpassword) {

        alert("cuenta creada")

      }

      else {
        alert("Las contraseñas no son iguales ")

      }
    }

    else { alert("Por favor inserta la informacion requerida") }

  }
  
  
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassowrd = () => {
    setShowPassword((mostrar) => !mostrar);
  };

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleConfirmShowPassowrd = () => {
    setShowConfirmPassword((mostrar) => !mostrar);
  };
  {/*Aqui termina  estado de mostrar y esconder password*/}

  return (
    <div className="signup">
      <div className="signUpbox">
        <div className="loginImgDiv">
          <img src={loginImg} className="loginImg" />
        </div>

        <form className="logingform" onSubmit={handleSubmit}>
          <label htmlFor="firstname" className="formLabel">
            First Name
          </label>
          <br />
          <input
            type={"text"}
            id="firstname"
            placeholder="Your Name"
            name="firstname"
            className="inpuText"
            value={data.firstname}
            onChange={handleOnChange}

          />

          <label htmlFor="lastname" className="formLabel">
            Last Name
          </label>
          <br />
          <input
            type={"text"}
            id="lastname"
            placeholder="Your Lastname"
            name="lastname"
            className="inpuText"
            value={data.lastname}
            onChange={handleOnChange}
          />

          <label htmlFor="email" className="formLabel">
            Email
          </label>
          <br />
          <input
            type={"email"}
            id="email"
            placeholder="Enter your email"
            name="email"
            className="inpuText"
            value={data.email}
            onChange={handleOnChange} 
          />

          {/*Password settings*/}

          <label htmlFor="password" className="formLabel">
            Password
          </label>
          <br />
          <div className="passwordFormDiv">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Password"
              name="password"
              className="inpuTextForPass"
              value={data.password}
              onChange={handleOnChange}
            />
            <span className="viewandHideIcon" onClick={handleShowPassowrd}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <label htmlFor="confirmpassword" className="formLabel">
            Confirm Password
          </label>
          <br />
          <div className="passwordFormDiv">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              placeholder="Confirm Password"
              name="confirmpassword"
              className="inpuTextForPass"
              value={data.confirmpassword}
              onChange={handleOnChange}
            />
            <span
              className="viewandHideIcon"
              onClick={handleConfirmShowPassowrd}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          {/*Password settings end here */}
          <div className="signupBtnDiv">
            <button type="submit" className="signupbtn">Sign-Up</button>
            </div>
            <p>Already have an account? <span><Link  to={"login"} className="loginLink">Login</Link></span></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

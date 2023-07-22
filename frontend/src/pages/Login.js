import React from "react";
import { useState } from "react";
import loginImg from "../images/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

const Login = () => {
  const navegate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  console.log(data);
  const userData = useSelector((state) => state);
 
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  //console.log(process.env.REACT_APP_SERVER_DOMIN);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(data),
        }
      );

      const dataRes = await fetchData.json();
      console.log(dataRes);
      

      //alert(dataRes.message)

      toast(dataRes.message);
      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navegate("/");
        }, 1000);
      }

      console.log(userData);
    } else {
      console.log("Por favor inserta la informacion requerida");
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassowrd = () => {
    setShowPassword((mostrar) => !mostrar);
  };

  /*Aqui termina  estado de mostrar y esconder password*/

  return (
    <div className="signup">
      <div className="signUpbox">
        <div className="loginImgDiv">
          <img src={loginImg} alt="logingImage" className="loginImg" />
        </div>

        <form className="logingform" onSubmit={handleSubmit}>
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

          {/*Password settings end here */}
          <div className="signupBtnDiv">
            <button type="submit" className="signinbtn">
              Log in
            </button>
          </div>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to={"/signup"} className="loginLink">
                Sign Up
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

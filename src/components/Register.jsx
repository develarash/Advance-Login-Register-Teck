import React, { useEffect, useRef, useState } from "react";
import registerImg from "../img/register.jpg";
import { Link } from "react-router-dom";

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";
function Register() {
  const usernameRef = useRef();

  const [username, setUsername] = useState();
  const [isValidUn, setIsValidUn] = useState(false);
  const [unFocus, setUnFocus] = useState(false);

  const [pwd, setPwd] = useState();
  const [isValidPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [isValidMatchPwd, setIsValidMatchPwd] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    usernameRef?.current?.focus();
  }, []);

  useEffect(() => {
    setIsValidUn(USERNAME_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setIsValidUn(PWD_REGEX.test(pwd));
    setIsValidMatchPwd(pwd === matchPwd);
  }, [pwd, matchPwd]);
  return (
    <section>
      <div className="h-screen w-full flex justify-center items-center bgBlueGradient">
        <div className="m-3 md:m-0 flex flex-col p-4 bg-white justify-start items-center w-[400px] rounded-md shadow-md overflow-hidden">
          <p className="text-center text-3xl pt-3 font-black text-blue-400">
            ثبت نام
          </p>
          <div className="flex items-center justify-center">
            <div className="w-52 h-52 inline-block">
              <img src={registerImg} alt="" />
            </div>
          </div>

          <form
            className="flex flex-col space-y-6 justify-center items-center w-full p-4 my-3"
            action=""
          >
            <p className="mt-4 bg-red-200 p-2 text-center w-full rounded-md">
              خطای سرور
            </p>
            <div className="w-full">
              <input
                className="textInput"
                type="text"
                placeholder="نام کاربری را وارد کنید"
              />
              <p className="errMsg">متن خطا</p>
            </div>
            <div className="w-full">
              <input className="textInput" type="text" placeholder="پسورد " />
              <p className="errMsg">خطا</p>
            </div>
            <div className="w-full">
              <input
                className="textInput"
                type="text"
                placeholder="تکرار پسورد"
              />
              <p className="errMsg">متن خطا</p>
            </div>
            <button className="cyanBtn ">ثبت نام</button>
          </form>
          <div className="flex justify-center items-center mr-5">
            <span className="text-gray-500">قبلا ثبت نام کردید ؟</span>
            <Link
              className="mr-2 text-cyan-400 font-semibold hover:text-cyan-500"
              to={"/login"}
            >
              ورود
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;

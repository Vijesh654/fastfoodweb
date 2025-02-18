import React, { useState } from "react";
import "./login.css";
const LoginPage = ({ setshowlogin }) => {
  const [currentState, setCurrentState] = useState("signup");
  const cross = "./fooditems/icons/cross.jpg";
  return (
    <div className="login flex justify-center items-center min-h-screen">
      <form className="login-container w-96 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-end">
        <img src={cross} onClick={()=>setshowlogin(false)} className="w-8 h-8" />
        </div>

        <h1 className="text-center font-bold text-2xl mb-4">
          {currentState === "signup" ? "Sign-Up Page" : "Login Page"}
        </h1>

        {currentState === "signup" && (
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-2 border rounded mb-2"
          />
        )}

        <input
          type="text"
          placeholder="Your Email"
          required
          className="w-full p-2 border rounded mb-2"
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-2 border rounded mb-2"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded mt-2">
          {currentState === "signup" ? "Create Account" : "Login"}
        </button>

        <div className="mt-3 text-sm">
          <input type="checkbox" required className="mr-2" />
          <span>By continuing, I agree to the terms of use & privacy policy.</span>
        </div>

        <p className="mt-2 text-center">
          {currentState === "signup" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setCurrentState("login")}
                className="text-blue-500 cursor-pointer"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Create a new account?{" "}
              <span
                onClick={() => setCurrentState("signup")}
                className="text-blue-500 cursor-pointer"
              >
                Click here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;

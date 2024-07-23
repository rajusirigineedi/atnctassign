import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "antd";

const SignInForm = () => {
  // Use React's useState hook to create a state variable for the email
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);

  // If a user is logged in, redirect to the home page
  useEffect(() => {
    if (currentUser) return navigate("/");
  }, [currentUser]);

  // This function will be called when the form is submitted
  const handleSubmit = (event) => {
    // Prevent the form from being submitted in the traditional way
    event.preventDefault();
    // Dispatch the loginUser action with the email
    dispatch(loginUser(email));
  };

  const routeToSignUpPage = () => navigate("/signup");

  return (
    <div className="grid grid-cols-2 h-screen max-md:flex">
      <div className="overflow-hidden max-md:hidden">
        <img
          src="https://www.pcworld.com/wp-content/uploads/2024/06/Netflix-Hintergrund.jpg?resize=1024%2C576&quality=50&strip=all"
          className="h-full w-full object-cover blur-sm bg-black"
        />
      </div>
      <div className="shadow-2xl px-[5%] flex flex-col justify-center max-md:shadow-none max-md:items-center">
        <div>
          <p className="text-3xl font-medium text-left">
            Welcome to <span className="text-primary">Watchlists</span>
          </p>
          <p className="text-lg text-left font-medium text-[#b6b6b6] mb-7">
            Login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="font-medium text-[#363636] text-lg mb-2"
          >
            Email
          </label>
          <br />
          {/* Update the email state variable every time the user types in the input field */}
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-1/2 min-w-[300px] py-3 border-2"
          />
          <br />
          <div className="flex gap-2 mt-5 w-1/2 min-w-[300px]">
            <Button type="primary" className="w-full h-10" htmlType="submit">
              Login
            </Button>
          </div>
          <br />
          <div className="flex flex-col gap-2 mt-5 w-1/2 min-w-[300px]">
            <p>Not Registered yet ? </p>
            <Button onClick={routeToSignUpPage} className="h-10">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;

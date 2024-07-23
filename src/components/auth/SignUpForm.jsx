import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../store/slices/authSlice";

const SignUpForm = () => {
  // Use React's useState hook to create a state variable for the email
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  // If a user is logged in, redirect them to the home page
  useEffect(() => {
    if (currentUser) return navigate("/");
  }, [currentUser]);

  // This function will be called when the form is submitted
  const handleSubmit = (event) => {
    // Prevent the form from being submitted in the traditional way
    event.preventDefault();
    // Dispatch the addUser action with the email and name
    dispatch(addUser({ email, name }));
  };

  const routeToSignInPage = () => navigate("/signin");

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="overflow-hidden">
        <img
          src="https://www.pcworld.com/wp-content/uploads/2024/06/Netflix-Hintergrund.jpg?resize=1024%2C576&quality=50&strip=all"
          className="h-full w-full object-cover blur-sm bg-black"
        />
      </div>
      <div className="shadow-2xl px-[5%] flex flex-col  justify-center">
        <p className="text-3xl font-medium">
          Welcome to <span className="text-primary">Watchlists</span>
        </p>
        <p className="text-lg font-medium text-[#b6b6b6] mb-7">
          Register your account
        </p>

        <form onSubmit={handleSubmit} className="w-1/2 min-w-[300px]">
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
            className="py-3"
          />
          <label
            htmlFor="name"
            className="font-medium text-[#363636] text-lg mb-2"
          >
            Name
          </label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="py-3"
          />
          <br />
          <div className="flex gap-2">
            <Button
              type="primary"
              className="flex-1 mt-5 h-10"
              htmlType="submit"
            >
              Sign Up
            </Button>
          </div>
          <div className="flex flex-col gap-2 mt-5 w-1/2 min-w-[300px]">
            <p>Already have an account? </p>
            <Button onClick={routeToSignInPage} className="h-10">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

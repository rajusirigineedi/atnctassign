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
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <br />
      {/* Update the email state variable every time the user types in the input field */}
      <Input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <Input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
      />
      <br />
      <div className="flex gap-2">
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
        <Button onClick={routeToSignInPage}>Login</Button>
      </div>
    </form>
  );
};

export default SignUpForm;

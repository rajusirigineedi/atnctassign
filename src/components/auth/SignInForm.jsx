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
      <br />
      <div className="flex gap-2">
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        <Button onClick={routeToSignUpPage}>Sign Up</Button>
      </div>
    </form>
  );
};

export default SignInForm;

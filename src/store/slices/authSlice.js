import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";

// users to store list of users, currentUser to store the current logged in user
const initialState = {
  users: [],
  currentUser: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // action.payload will have an email and a username. Add it to the users array, if a user with the same email does not exist.
      if (!state.users.find((user) => user.email === action.payload.email)) {
        const newUser = { id: uuid(), ...action.payload };
        state.users.push(newUser);
        state.currentUser = newUser;
        toast.success("User signed up successfully!");
      } else {
        const errorMsg =
          "User already exist with current email!. Try logging in.";
        toast.error(errorMsg);
      }
    },
    loginUser: (state, action) => {
      // action.payload has user entered email. check it in the users array, if user found, set it to currentUser
      const user = state.users.find((user) => user.email === action.payload);
      // TODO: can implement a warning / error flow as well. [ out of scope for this assignment ]
      if (!user) {
        const errorMsg = "User not exist with current email!. Try signing up.";
        toast.error(errorMsg);
        return;
      }
      state.currentUser = user;
      toast.success("User logged in successfully!");
    },
    logoutUser: (state) => {
      // clear the currentUser from the state to logout
      state.currentUser = null;
      toast.success("User logged out successfully!");
    },
  },
});

export const { addUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;

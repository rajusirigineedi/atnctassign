import { Route, Routes } from "react-router-dom";
import SignInForm from "./components/auth/SignInForm";
import SignUpForm from "./components/auth/SignUpForm";
import Home from "./components/dashboard/Home";
import Watchlist from "./components/dashboard/Watchlist";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Route>
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
  );
}

export default App;

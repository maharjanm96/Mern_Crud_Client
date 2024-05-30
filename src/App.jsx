import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarLayout from "./components/NavBar/Navbar";
import CreateUser from "./components/Pages/CreateUser";
import MyProfile from "./components/Pages/MyProfile";
import SignUp from "./components/Pages/SignUp";
import Login from "./components/Pages/Login";
import Home from "./components/Pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/home" element={<NavbarLayout />}></Route> */}
        <Route index element={<Home />} />
        <Route path="/createuser" element={<CreateUser />}></Route>
        <Route path="/myprofile" element={<MyProfile />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

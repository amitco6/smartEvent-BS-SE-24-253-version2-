import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"

import AboutUs from "./pages/AboutUs"


export default function App() {
  return <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>
      <Route path="/profile" element={<Profile />}></Route>

    </Routes>
  
  </BrowserRouter>
  
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Auth/Signup";
import Home from "./Home";
import Login from "./Auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/create-account" Component={Signup}></Route>
          <Route path="/login" Component={Login}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

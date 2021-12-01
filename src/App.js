import { Route, Routes } from "react-router";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
    <Route path='/' element={<LogIn />} />
    <Route path='/home' element={<Home />} />
    <Route path='/signUp' element={< SignUp />} />
    </Routes>    
  );
}

export default App;

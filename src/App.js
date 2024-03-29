import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route exact path="/" element={<Navigate to={"/login"} />} />
      </Routes>
    </div>
  );
}

export default App;

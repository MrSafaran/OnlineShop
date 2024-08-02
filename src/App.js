import Login from "./components/Login";
import Main from "./components/Home";
import Signup from "./components/Signup";
import { Route, Routes, Navigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./components/Home";
import styles from './styles/App.module.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Navigate to={"/login"} />} />
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Component } from './component/component';
import Login from './screen/login';
import Register from './screen/register';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './home';
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

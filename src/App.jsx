import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Otp from './pages/otp/Otp';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Products from './pages/products/products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/verify" element={ <Otp />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./components/Customers";
import Customer from "./components/Customer";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:id" element={<Customer />} />
        </Routes>
      </NavBar>
    </BrowserRouter>
  );
}

export default App;

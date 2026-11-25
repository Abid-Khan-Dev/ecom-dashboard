import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {

  return (

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<Layout />}>

        <Route path="/" element={<Navigate to="/products" />} />

        <Route path="/products" element={<Products />} />

        <Route path="/categories" element={<Categories />} />
      </Route>

    </Routes>
  );
}

export default App;

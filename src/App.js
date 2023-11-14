import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cleared from "./pages/Cleared/Cleared";
import History from "./pages/History/History";
import Products from "./pages/Products/Products";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import React, {useEffect, useState} from "react";


function App() {

    return (
        <Layout>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/cleared" exact element={<Cleared />} />
                <Route path="/history" exact element={<History />} />
                <Route path="/products" exact element={<Products />} />
                <Route path="/settings" exact element={<Settings />} />
                <Route path="/login" exact element={<Login />} />
            </Routes>

        </Layout>
    );
}

export default App;

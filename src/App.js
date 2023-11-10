import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cleared from "./pages/Cleared/Cleared";
import History from "./pages/History/History";
import Products from "./pages/Products/Products";
import Settings from "./pages/Settings/Settings";


function App() {

    // all colors will be set in variable.scss as secondary, primary, text, etc..
    // never use individual colors in css file

    return (
        <Layout>
            {/* Global state will go here (JSON)
            https://stackoverflow.com/questions/69675357/what-is-the-proper-way-to-do-global-state */}
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/cleared" exact element={<Cleared />} />
                <Route path="/history" exact element={<History />} />
                <Route path="/products" exact element={<Products />} />
                <Route path="/settings" exact element={<Settings />} />
            </Routes>
        </Layout>
    );
}

export default App;

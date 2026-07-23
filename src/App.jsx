import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Cookies from "./pages/Cookies";
import Privacy from "./pages/Privacy";
import Security from "./pages/Security";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/security" element={<Security />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
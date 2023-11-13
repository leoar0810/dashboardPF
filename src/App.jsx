import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Models from "./pages/Models.jsx";
import Navbar from "./widgets/Navbar.jsx";
import Footer from "./widgets/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/models" element={<Models />} />
          <Route path="/dashboardPF" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

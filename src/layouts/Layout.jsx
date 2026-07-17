import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SupportModal from "../components/SupportModal";

export default function Layout() {
  
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy font-mooli text-bluegrey">
      <NavBar onSupportClick={() => setSupportOpen(true)} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <SupportModal open={supportOpen} onClose={() => setSupportOpen(false)} />
    </div>
  );
}

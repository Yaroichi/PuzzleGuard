import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SupportModal from "../components/SupportModal";
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  
  const [supportOpen, setSupportOpen] = useState(false);
  const { pathname } = useLocation();

  // При кожній зміні сторінки прокручуємо вгору
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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

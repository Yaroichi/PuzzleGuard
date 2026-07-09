import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-navy font-mooli text-bluegrey">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
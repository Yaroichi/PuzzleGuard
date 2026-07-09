import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-navy font-mooli text-bluegrey">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
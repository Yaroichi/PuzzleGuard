import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="min-h-screen bg-navy font-mooli text-bluegrey">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
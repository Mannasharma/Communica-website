import { Outlet } from "react-router-dom";
import Navbar from "./components/navigation";
import "./layout.css"; // Import CSS for layout styling

function Layout() {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

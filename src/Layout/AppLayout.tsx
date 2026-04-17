import { Outlet } from "react-router-dom";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";

function AppLayout() {
  return (
    <div className="bg-background max-w-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;

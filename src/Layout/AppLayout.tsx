import { Outlet } from "react-router-dom";
import NavBar from "../componets/NavBar";

function AppLayout() {
  return (
    <div className="bg-background max-w-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default AppLayout;

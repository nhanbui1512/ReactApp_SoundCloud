import Nav from "../components/Header/nav";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="Layout">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
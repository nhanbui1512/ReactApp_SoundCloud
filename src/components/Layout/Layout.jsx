import Nav from "../Header/nav";
import Footer from "../Footer/Footer";
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
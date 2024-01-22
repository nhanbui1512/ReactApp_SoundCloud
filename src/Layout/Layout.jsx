import Header from "../components/Header";
import Footer from "components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;

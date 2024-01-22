import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
const cx = classNames.bind(styles);

function Layout() {
  return (
    <div>
      <Header />
      <div className={cx("content")}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default Layout;

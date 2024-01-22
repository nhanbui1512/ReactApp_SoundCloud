import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx("wrapper")}>
      <div
        style={{
          position: "relative",
        }}
      >
        <div className={cx("content")}>Trending Page</div>
        <div className={cx("side-bar")}>Side bar right</div>
      </div>
    </div>
  );
};
export default Home;

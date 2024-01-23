import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import ListDisk from "components/ListDisk";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx("wrapper")}>
      <div
        style={{
          position: "relative",
        }}
      >
        <div className={cx("content")}>
          <div className={cx("trending-wrapper")}>
            <ListDisk />
            <ListDisk title={"Study"} />
            <ListDisk title={"More of what you like"} />
            <ListDisk title={`Today's Mixes`} />
            <ListDisk title={"Trending Music on SoundCloud"} />
          </div>
        </div>
        <div className={cx("side-bar")}>Side bar right</div>
      </div>
    </div>
  );
};
export default Home;

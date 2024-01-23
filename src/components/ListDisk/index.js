import Slider from "components/Slider";
import classNames from "classnames/bind";
import styles from "./ListDisk.module.scss";

const cx = classNames.bind(styles);

function ListDisk({ title }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h2>{title || "Recently Played"}</h2>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
}
export default ListDisk;
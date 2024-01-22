import classNames from "classnames/bind";
import styles from "./Feed.module.scss";
const cx = classNames.bind(styles);

function Feed() {
  return <div className={cx("wrapper")}>Feed page</div>;
}
export default Feed;

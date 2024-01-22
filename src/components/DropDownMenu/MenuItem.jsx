import classNames from "classnames/bind";
import styles from "./DropDownMenu.module.scss";
const cx = classNames.bind(styles);

function MenuItem({ children, icon, className, separate }) {
  return (
    <div
      className={cx("menuitem-wrapper", {
        icon,
        separate,
      })}
    >
      {icon && <div className={cx("icon-wrapper")}>{icon}</div>}
      <div>{children}</div>
    </div>
  );
}
export default MenuItem;

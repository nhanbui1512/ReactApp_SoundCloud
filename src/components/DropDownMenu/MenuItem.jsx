import classNames from 'classnames/bind';
import styles from './DropDownMenu.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ children, icon, className, separate }) {
  return (
    <button
      className={cx('menuitem-wrapper', {
        icon,
        separate,
        [className]: className,
      })}
    >
      {icon && <div className={cx('icon-wrapper')}>{icon}</div>}
      <div>{children}</div>
    </button>
  );
}
export default MenuItem;

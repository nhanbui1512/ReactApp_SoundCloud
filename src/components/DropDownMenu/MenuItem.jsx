import classNames from 'classnames/bind';
import styles from './DropDownMenu.module.scss';
import Button from 'components/Button';
const cx = classNames.bind(styles);

function MenuItem({ to, children, icon, className, separate, onClick, primary }) {
  const classes = cx('menuitem-wrapper', {
    [className]: className,
    primary,
  });
  return (
    <Button
      textBlack
      className={classes}
      separate={separate}
      leftIcon={icon}
      to={to}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
export default MenuItem;

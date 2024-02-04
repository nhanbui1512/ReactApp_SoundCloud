import classNames from 'classnames/bind';
import styles from './SwitchButton.module.scss';

const cx = classNames.bind(styles);

function SwitchButton({ handleOnClick, isChecked = true }) {
  return (
    <div className={cx('switch')}>
      <input defaultChecked={isChecked} type="checkbox" onChange={handleOnClick} />
      <span className={cx('slider')}></span>
    </div>
  );
}

export default SwitchButton;

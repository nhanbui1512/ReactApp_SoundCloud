import classNames from 'classnames/bind';
import styles from './SwitchButton.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

function SwitchButton({ onSwitch, isChecked = false }) {
  const handleSwitch = (e) => {
    if (onSwitch) return onSwitch(e);
  };
  return (
    <div className={cx('switch')}>
      <input onChange={() => {}} checked={isChecked} type="checkbox" />
      <span className={cx('slider')} onClick={handleSwitch}></span>
    </div>
  );
}

export default React.memo(SwitchButton);

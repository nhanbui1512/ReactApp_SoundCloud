import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';
const cx = classNames.bind(styles);

function HeaderOnly() {
  return (
    <div>
      <Header />
      <div className={cx('content')}>
        <Outlet />
      </div>
    </div>
  );
}
export default HeaderOnly;

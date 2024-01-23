import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';
import Player from 'components/Player';
const cx = classNames.bind(styles);

function Layout() {
  return (
    <div>
      <Header />
      <div className={cx('content')}>
        <Outlet />
      </div>
      <Player />
    </div>
  );
}
export default Layout;

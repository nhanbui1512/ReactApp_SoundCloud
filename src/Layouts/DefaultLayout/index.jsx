import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';
import Player from 'components/Player';
import { useContext } from 'react';
import { StorageContext } from 'context/Storage';
const cx = classNames.bind(styles);

function DefaultLayout() {
  const storage = useContext(StorageContext);

  return (
    <div>
      <Header />
      <div className={cx('content')}>
        <Outlet />
      </div>
      <Player disable={Object.keys(storage.currentMusic).length === 0} />
    </div>
  );
}
export default DefaultLayout;

import { Route, Routes, NavLink } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Library.module.scss';
//import page
import Overview from './Overview';
import Likes from './Likes';
import Playlists from './Playlists';
import Following from './Following';

const cx = classNames.bind(styles);
const Library = () => {
  return (
    <div className={cx('app')}>
      <div style={{ display: 'flex' }}>
        <NavLink
          className={(nav) => cx('navbar', { active: nav.isActive })}
          to={'/library/overview'}
        >
          Overview
        </NavLink>

        <NavLink className={(nav) => cx('navbar', { active: nav.isActive })} to={'/library/Likes'}>
          Likes
        </NavLink>

        <NavLink
          className={(nav) => cx('navbar', { active: nav.isActive })}
          to={'/library/Playlists'}
        >
          Playlists
        </NavLink>

        <NavLink
          className={(nav) => cx('navbar', { active: nav.isActive })}
          to={'/library/Following'}
        >
          Following
        </NavLink>

        <NavLink
          className={(nav) => cx('navbar', { active: nav.isActive })}
          to={'/library/History'}
        >
          History
        </NavLink>
      </div>
      <Routes>
        <Route index path="/Overview" element={<Overview />} />
        <Route path="/Likes" element={<Likes />} />
        <Route path="/Playlists" element={<Playlists />} />
        <Route path="/Following" element={<Following />} />
      </Routes>
    </div>
  );
};
export default Library;

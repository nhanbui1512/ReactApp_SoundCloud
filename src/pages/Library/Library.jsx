import { Route, Routes, NavLink } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Library.module.scss';
//import page
import Overview from './Overview';
import Likes from './Likes';
import Playlists from './Playlists';
import Following from './Following';
import { useContext } from 'react';
import { LibraryContext } from 'context/Library';

const cx = classNames.bind(styles);
const Library = () => {
  const context = useContext(LibraryContext);
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
      </div>
      <Routes>
        <Route index path="/Overview" element={<Overview data={context.dataSongs} />} />
        <Route path="/Likes" element={<Likes data={context.dataSongLikes} />} />
        <Route path="/Playlists" element={<Playlists playLists={context.dataPlaylists} />} />
        <Route path="/Following" element={<Following data={context.dataUsers} />} />
      </Routes>
    </div>
  );
};
export default Library;

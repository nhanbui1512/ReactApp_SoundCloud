import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Logo, PlayList } from 'components/Icons';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faEllipsis,
  faHeart,
  faStar,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import HeadlessTippy from '@tippyjs/react/headless';
import { MenuItem, Wrapper } from 'components/DropDownMenu';
import { useContext } from 'react';
import Button from 'components/Button';
import { StorageContext } from 'context/Storage';
import SearchBar from './SearchBar';

const cx = classNames.bind(styles);
const menuUserItem = [
  {
    title: 'Profile',
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    title: 'Like',
    icon: <FontAwesomeIcon icon={faHeart} />,
  },
  {
    title: 'Playlist',
    icon: <PlayList />,
  },
  {
    title: 'Following',
    icon: <FontAwesomeIcon icon={faUsers} />,
  },
  {
    title: 'Try Next Pro',
    icon: <FontAwesomeIcon icon={faStar} />,
  },
];

const moreMenuItem = [
  {
    title: 'About us',
  },
  {
    title: 'Legal',
  },
  {
    title: 'Coppyright',
    separate: true,
  },
  {
    title: 'Mobile apps',
  },
  {
    title: 'For creators',
  },
  {
    title: 'Blog',
  },
  {
    title: 'Jobs',
  },

  {
    title: 'Developers',
    separate: true,
  },
  {
    title: 'Support',
  },
  {
    title: 'Keyboard shortcuts',
    separate: true,
  },
  {
    title: 'Subscription',
  },
  {
    title: 'Settings',
  },
  {
    title: 'Sign out',
  },
];

const Header = () => {
  const globalStates = useContext(StorageContext);
  const [currentUser, setCurrentUser] = [globalStates.currentUser, globalStates.setCurrentUser];

  return (
    <div className={cx('header')}>
      <div className={cx('header-container')}>
        <NavLink to="/" className={(nav) => cx('logo', { active: nav.isActive })}>
          <Logo />
        </NavLink>

        <NavLink to="/" className={(nav) => cx('header-items', { active: nav.isActive })}>
          Home
        </NavLink>
        <NavLink to={'/feed'} className={(nav) => cx('header-items', { active: nav.isActive })}>
          Feed
        </NavLink>
        <NavLink
          to={'/library/overview'}
          className={(nav) => cx('header-items', { active: nav.isActive })}
        >
          Library
        </NavLink>

        <SearchBar />

        {currentUser && (
          <div
            style={{
              color: `var(--orange-primary)`,
            }}
            className={cx('header-items')}
          >
            Try Next Pro
          </div>
        )}

        {currentUser && <div className={cx('header-items')}>For Artists</div>}

        {currentUser || (
          <div className={cx('login-menu')}>
            <Button to={'/login'} outline>
              Sign in
            </Button>
            <Button to={'/login'} primary>
              Create Account
            </Button>
          </div>
        )}
        <NavLink to={'/upload'} className={(nav) => cx('header-items', { active: nav.isActive })}>
          Upload
        </NavLink>

        {/* Avatar DropDown Menu */}
        {currentUser && (
          <HeadlessTippy
            interactive
            offset={[33, 0]}
            render={(atr) => {
              return (
                <Wrapper className={cx('dropdown-menu')}>
                  {menuUserItem.map((item, index) => {
                    return (
                      <MenuItem key={index} icon={item.icon}>
                        {item.title}
                      </MenuItem>
                    );
                  })}
                </Wrapper>
              );
            }}
          >
            <div className={cx('avatar-wrapper')}>
              <Image
                className={cx('avatar-img')}
                src={'https://i1.sndcdn.com/avatars-000656606957-0tv0jo-t50x50.jpg'}
              />
              <FontAwesomeIcon className={cx('dropdown-icon')} icon={faChevronDown} />
            </div>
          </HeadlessTippy>
        )}

        {/* More DropDown Menu */}
        <HeadlessTippy
          interactive
          offset={[-60, 0]}
          render={(atr) => {
            return (
              <Wrapper className={cx('more-menu')}>
                {moreMenuItem.map((item, index) => {
                  return (
                    <MenuItem separate={item.separate} key={index} icon={item.icon}>
                      {item.title}
                    </MenuItem>
                  );
                })}
              </Wrapper>
            );
          }}
        >
          <div className={cx('more-btn')}>
            <FontAwesomeIcon className={cx('more-icon')} icon={faEllipsis} />
          </div>
        </HeadlessTippy>
      </div>
    </div>
  );
};
export default Header;

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { MenuItem, Wrapper } from 'components/DropDownMenu';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from 'hooks';
import { getSongsByName } from 'api/songs';
import { getPlaylistsByName } from 'api/playlist';

const cx = classNames.bind(styles);
const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggest, setSuggest] = useState([])
  const navigate = useNavigate();

	const debounceKeyword = useDebounce(keyword, 700);

  const getSuggest = async (keyword) => {
    await Promise.allSettled([getSongsByName(keyword), getPlaylistsByName(keyword)])
      .then(([songsResult, playlistsResult]) => {
        const suggest = [].concat(songsResult.value?.songs.slice(0,4), playlistsResult.value?.playlists.slice(0,4))
        // console.log(suggest)
        setSuggest(suggest)
      })
    setLoading(false);
  };
  useEffect(() => {
    if (debounceKeyword !== '') {
      getSuggest(debounceKeyword);
    } else {
      setSuggest([])
      setLoading(false);
    }
  }, [debounceKeyword]);

  const showSuggest = () => {
    if (debounceKeyword.trim() !== '') {
      return (
        <div>
          <MenuItem key={0}
						onClick={() => handleSearch()}
					>Search for "{debounceKeyword}"</MenuItem>
          {suggest.map((item, index) => (
              <MenuItem
                key={index + 1}
                icon={<FontAwesomeIcon icon={faSearch} />}
                onClick={(e) => setKeyword(e.target.innerText)}
              >
                {item.name}
              </MenuItem>
            ))}
        </div>
      );
    }
  };

  const handleSearch = () => {
    if (keyword.trim() !== '') {
      navigate(`/search?keyword=${keyword.trim()}`);
    }
  };

  return (
    <HeadlessTippy
      interactive
      visible={keyword.trim() !== ''}
      offset={[0, 0]}
      render={() => {
        return (
          <Wrapper className={cx('search-suggest')}>
            {loading ? (
              <label style={{ fontSize: 16, fontWeight: 700, paddingLeft: 8 }}>Loading...</label>
            ) : (
              showSuggest()
            )}
          </Wrapper>
        );
      }}
    >
      <div className={cx('search-container')}>
        <input
          value={keyword}
          onChange={(e) => {
						setKeyword(e.target.value)
						setLoading(true)
					}}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button className={cx('search-btn')} onClick={() => handleSearch()}>
          <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
        </button>
        <button
          className={cx('search-clear-btn')}
          hidden={keyword === ''}
          onClick={() => setKeyword('')}
        >
          <FontAwesomeIcon className={cx('search-icon')} icon={faClose} />
        </button>
      </div>
    </HeadlessTippy>
  );
};

export default SearchBar;

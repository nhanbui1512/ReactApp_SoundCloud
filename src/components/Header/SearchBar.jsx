import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { MenuItem, Wrapper } from 'components/DropDownMenu';
import { useEffect, useState } from 'react';
import { getSongsByName } from 'services/firebase/firestore/songs';
import { getArtistsByName } from 'services/firebase/firestore/artists';
import { getPlaylistsByName } from 'services/firebase/firestore/playlist';
import { useNavigate } from 'react-router-dom';
import { getGenresByName } from 'services/firebase/firestore/genres';

const cx = classNames.bind(styles);
const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [songsSuggest, setSongsSuggest] = useState([]);
  const [artistsSuggest, setArtistsSuggest] = useState([]);
  const [genresSuggest, setGenresSuggest] = useState([]);
  const [playlistsSuggest, setPlaylistSuggest] = useState([]);
  const navigate = useNavigate();

  const getSuggest = async (keyword) => {
    const songs = await getSongsByName(keyword);
    const artists = await getArtistsByName(keyword);
    const genres = await getGenresByName(keyword);
    const playlists = await getPlaylistsByName(keyword);
    setSongsSuggest(songs.slice(0, 4));
    setArtistsSuggest(artists.slice(0, 4));
    setGenresSuggest(genres.slice(0, 4));
    setPlaylistSuggest(playlists.slice(0, 4));
    setLoading(false);
  };
  useEffect(() => {
    if (keyword !== '') {
      setLoading(true);
      getSuggest(keyword);
    } else {
      setSongsSuggest([]);
      setArtistsSuggest([]);
      setGenresSuggest([]);
      setPlaylistSuggest([]);
      setLoading(false);
    }
  }, [keyword]);

  const showSuggest = () => {
    if (keyword !== '') {
      return (
        <div>
          <MenuItem key={0}>Search for "{keyword}"</MenuItem>
          {[]
            .concat(songsSuggest, artistsSuggest, genresSuggest, playlistsSuggest)
            .map((item, index) => (
              <MenuItem
                key={index + 1}
                icon={<FontAwesomeIcon icon={faSearch} />}
                onClick={(e) => setKeyword(e.target.innerHTML)}
              >
                {item.name}
              </MenuItem>
            ))}
        </div>
      );
    }
  };

  const handleSearch = () => {
    if (keyword !== '') {
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
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button className={cx('search-btn')} onClick={handleSearch}>
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

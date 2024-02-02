import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FeedSong from 'components/FeedLeft/FeedSong/FeedSong';
import { MenuItem } from 'components/DropDownMenu';
import PostSearch from 'components/PostSearch';
import Gallery from 'components/Gallery';
import { getSongsByName } from 'api/songs';
import { getPlaylistsByName } from 'api/playlist';
import { getGenres, getSongsByGenreId } from 'api/genres';

const cx = classNames.bind(styles);

const Search = () => {
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(0);
  const [songsResult, setSongsResult] = useState([]);
  const [songsByGenresResult, setSongsByGenresResult] = useState([]);
  const [artistsResult] = useState([]);
  const [playlistsResult, setPlaylistResult] = useState([]);

  const getResult = async (keyword) => {
    await Promise.allSettled([
      getSongsByName(keyword),
      getPlaylistsByName(keyword),
      getGenres(),
    ]).then(([songsResult, playlistsResult, genresResult]) => {
      if (songsResult.status === 'fulfilled') {
        setSongsResult(songsResult.value.songs);
      }
      if (playlistsResult.status === 'fulfilled') {
        setPlaylistResult(playlistsResult.value.playlists);
      }
      if (genresResult.status === 'fulfilled') {
        // filter genre contain keyword
        const matchGenres = [];
        genresResult.value.data.forEach(
          (genre) =>
            genre.name.toLowerCase().includes(keyword.toLowerCase()) && matchGenres.push(genre),
        );
        // for each match genre, get songs by genre id
        const getSongsByGenre = matchGenres.map((genre) => getSongsByGenreId(genre.id, 1, 5));
        Promise.allSettled(getSongsByGenre).then((results) => {
          const songsByGenre = [];
          results
            .filter((result) => result.status === 'fulfilled')
            .forEach((result) => songsByGenre.push(result.value.data));
          setSongsByGenresResult(songsByGenre);
        });
      }
    });
    setLoading(false);
  };
  useEffect(() => {
    const kw = searchParams.get('keyword');
    setKeyword(kw);
    setLoading(true);
    getResult(kw);
    window.scrollTo(0, 0); // scroll to top upon render
  }, [searchParams]);

  const showResult = () => {
    switch (show) {
      case 0:
        return (
          <div>
            <h2 className={cx('header')}>Songs</h2>
            {songsResult.length === 0 ? (
              <h4 style={{ color: 'gray' }}>Sorry we didn't find any results for "{keyword}"</h4>
            ) : (
              songsResult.map((item, index) => <FeedSong key={index} dataSong={item} />)
            )}
          </div>
        );
      case 1:
        return (
          <div>
            <h2 className={cx('header')}>Songs by Genre</h2>
            {songsByGenresResult.length === 0 ? (
              <h4 style={{ color: 'gray' }}>Sorry we didn't find any results for "{keyword}"</h4>
            ) : (
              songsByGenresResult.map((item, index) => (
                <div>
                  <h4>{item.name}</h4>
                  {item.songs.map((item, index) => (
                    <FeedSong key={index} dataSong={item} />
                  ))}
                </div>
              ))
            )}
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className={cx('header')}>Artists</h2>
            {artistsResult.length === 0 ? (
              <h4 style={{ color: 'gray' }}>Sorry we didn't find any results for "{keyword}"</h4>
            ) : (
              artistsResult.map((item, index) => <PostSearch key={index} data={item} />)
            )}
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className={cx('header')}>Playlists</h2>
            {playlistsResult.length === 0 ? (
              <h4 style={{ color: 'gray' }}>Sorry we didn't find any results for "{keyword}"</h4>
            ) : (
              playlistsResult.map((item, index) => <Gallery key={index} data={item} />)
            )}
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div
        style={{
          position: 'relative',
        }}
      >
        <div className={cx('content')}>
          <h2 className={cx('header')}>Search result for "{keyword}"</h2>
          {loading ? <div>Searching...</div> : showResult()}
        </div>

        <div className={cx('side-bar')}>
          <h3>Search filter</h3>
          <MenuItem key={0} onClick={() => setShow(0)}>
            <div style={{ color: show === 0 && '#ff5500' }}>Songs</div>
          </MenuItem>
          <MenuItem key={1} onClick={() => setShow(1)}>
            <div style={{ color: show === 1 && '#ff5500' }}>Songs by Genre</div>
          </MenuItem>
          <MenuItem key={2} onClick={() => setShow(2)}>
            <div style={{ color: show === 2 && '#ff5500' }}>Artists</div>
          </MenuItem>
          <MenuItem key={3} onClick={() => setShow(3)}>
            <div style={{ color: show === 3 && '#ff5500' }}>Playlists</div>
          </MenuItem>
        </div>
      </div>
    </div>
  );
};
export default Search;

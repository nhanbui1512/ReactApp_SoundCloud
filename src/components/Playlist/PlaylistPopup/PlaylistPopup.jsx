import classNames from 'classnames/bind';
import styles from './Playlist.module.scss';
import Popup from 'components/Popup';
import { useContext, useEffect, useState } from 'react';
import {
  addSongsToPlaylist,
  createPlaylist,
  getPlaylistsByUserId,
  removeSongsFromPlaylist,
} from 'api/playlist';
import { StorageContext } from 'context/Storage';

const cx = classNames.bind(styles);

/* Usage:
  const [openPlaylistPopup, setOpenPlaylistPopup] = useState(false)
  ...
  return (
    ...
      <button onClick={() => setOpenPlaylistPopup(true)}>Add to playlist</button>
      <PlaylistPopup open={openPlaylistPopup} onClose={setOpenPlaylistPopup} songData={}/>
    ...
  )
*/

// songData = example
const example = {
  thumbNail: 'http://localhost:3000/uploads/images/thumbNail-1706279697257',
  id: 12,
  name: 'Example',
  artistName: 'artist name',
  //...
};

export const PlaylistPopup = ({ open, onClose, songData = example }) => {
  const [tab, setTab] = useState(0);
  const [myPlaylist, setMyPlaylist] = useState([]);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [filter, setFilter] = useState('');
  const [creatingPlaylist, setCreatingPlaylist] = useState(false);

  // get user id
  const storage = useContext(StorageContext);
  const userId = storage.userData.id;

  useEffect(() => {
    if (open) {
      RefreshPlaylist();
    }
    // eslint-disable-next-line
  }, [open]);

  const RefreshPlaylist = () => {
    getPlaylistsByUserId(userId)
      .then((result) => {
        setMyPlaylist(result.data.playlists.sort((a, b) => a.id - b.id));
      })
      .catch((error) => console.log(error));
  };

  const AddToPlaylist = (playlistId, playlistName) => {
    addSongsToPlaylist(playlistId, playlistName, [songData.id])
      .then((result) => {
        if (result.result) {
          // success
          RefreshPlaylist();
        } else {
          // error
          alert('Added to playlist failed. Try again.');
        }
      })
      .catch((error) => console.log(error));
  };

  const RemoveFromPlaylist = (playlistId) => {
    removeSongsFromPlaylist(playlistId, [songData.id])
      .then((result) => {
        if (result.result) {
          // success
          RefreshPlaylist();
        } else {
          // error
          alert('Removed from playlist failed. Try again.');
        }
      })
      .catch((error) => console.log(error));
  };

  const CreateNewPlaylist = () => {
    if (newPlaylistName === '') {
      alert('Enter playlist name.');
    } else {
      setCreatingPlaylist(true);
      createPlaylist(newPlaylistName, [songData.id])
        .then((result) => {
          if (result.result) {
            // success
            setNewPlaylistName('');
            onClose(false);
          } else {
            // error
            alert('Create playlist failed. Try again.');
          }
          setCreatingPlaylist(false);
        })
        .catch((error) => {
          console.log(error);
          setCreatingPlaylist(false);
        });
    }
  };

  return (
    <Popup
      open={open}
      onClose={onClose}
      header={
        <div className={cx('tab-select')}>
          <button className={cx('tab-button')} disabled={tab === 0} onClick={() => setTab(0)}>
            Add to Playlist
          </button>
          <button className={cx('tab-button')} disabled={tab === 1} onClick={() => setTab(1)}>
            Create Playlist
          </button>
        </div>
      }
    >
      {/* Song info */}
      <div className={cx('song-info')}>
        <img className={cx('song-img')} src={songData.thumbNail} alt={songData.name} />
        <div className={cx('song-artist-name')}>
          <h6 className={cx('artist-name')}>{songData.artistName}</h6>
          <h5 className={cx('song-name')}>{songData.name}</h5>
        </div>
      </div>
      {/* Add to Playlist */}
      <div className={cx('add-to-playlist')} style={{ display: tab === 0 ? 'flex' : 'none' }}>
        <input className={cx('filter')}
          id="playlist-filter"
          placeholder="Filter playlists"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className={cx('playlist-group')}>
          {myPlaylist.filter((x) => x.name.toLowerCase().includes(filter.toLowerCase())).length ===
            0 && <div style={{ fontWeight: 'bold', fontSize: '12px' }}>No playlist found</div>}
          {myPlaylist
            .filter((x) => x.name.toLowerCase().includes(filter.toLowerCase()))
            .map((item, index) => (
              <div className={cx('playlist-item')} key={index}>
                <div className={cx('playlist-name')}>{item.name}</div>
                {item.songs.map((song) => song.id).includes(songData.id) ? (
                  <button className={cx('button-added')} onClick={() => RemoveFromPlaylist(item.id)}>
                    Added
                  </button>
                ) : (
                  <button className={cx('button-add')} onClick={() => AddToPlaylist(item.id, item.name)}>Add to playlist</button>
                )}
              </div>
            ))}
        </div>
      </div>
      {/* Create Playlist */}
      <div className={cx('create-playlist')} style={{ display: tab === 1 ? 'flex' : 'none' }}>
        <div className={cx('new-playlist-label')}>Playlist name</div>
        <input className={cx('new-playlist-input')}
          id="new-playlist-name"
          required
          placeholder="Required"
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
        />
        <button className={cx('button-save')} disabled={creatingPlaylist} onClick={CreateNewPlaylist}>
          {creatingPlaylist ? 'Saving...' : 'Save'}
        </button>
      </div>
    </Popup>
  );
};

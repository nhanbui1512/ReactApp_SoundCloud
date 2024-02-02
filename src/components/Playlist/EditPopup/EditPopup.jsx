import classNames from 'classnames/bind';
import styles from './EditPopup.module.scss';
import Popup from 'components/Popup';
import { useState } from 'react';
import { removeSongsFromPlaylist } from 'api/playlist';

const cx = classNames.bind(styles);

export const EditPopup = ({ open, onClose, playlistData }) => {
  const [newPlaylistName, setNewPlaylistName] = useState(playlistData.name);
  const [removeSongs, setRemoveSongs] = useState([]);
  const [saveChange, setSaveChange] = useState(false);

  const HandleRemoveSong = (songId) => {
    const edit = [].concat(removeSongs);
    if (!edit.includes(songId)) {
      edit.push(songId);
    }
    setRemoveSongs(edit);
  };
  const CancleRemoveSong = (songId) => {
    const edit = removeSongs.filter((id) => id !== songId);
    setRemoveSongs(edit);
  };

  const HandleSaveChange = () => {
    if (newPlaylistName === '') {
      alert('Enter playlist name.');
    } else {
      setSaveChange(true);
      // to do: change playlist name
      removeSongsFromPlaylist(playlistData.id, removeSongs)
        .then((result) => {
          console.log(result);
          if (result.result === true) {
            setSaveChange(false);
            onClose();
          } else {
            throw Error();
          }
        })
        .catch((error) => {
          alert('Save change failed. Try again');
          setSaveChange(false);
        });
    }
  };

  return (
    <Popup open={open} onClose={onClose} header={<h4>Edit</h4>}>
      <div className={cx('edit-playlist')}>
        <div className={cx('playlist-info')}>
          <label>Playlist name</label>
          <input
            id="new-playlist-name"
            required
            placeholder="Required"
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e.target.value)}
          />
        </div>
        <div className={cx('playlist-songs')}>
          {playlistData.songs.map((song) => (
            <div className={cx('song-info')}>
              <img src={song.thumbNail} alt="" />
              <div className={cx('song-artist-name')}>
                <h6>
                  {song.artistName} - {song.name}
                </h6>
              </div>
              {removeSongs.includes(song.id) ? (
                <button className={cx('removed')} onClick={() => CancleRemoveSong(song.id)}>
                  Removed
                </button>
              ) : (
                <button onClick={() => HandleRemoveSong(song.id)}>Remove</button>
              )}
            </div>
          ))}
        </div>
        <button disabled={saveChange} onClick={HandleSaveChange}>
          {saveChange ? 'Saving...' : 'Save'}
        </button>
      </div>
    </Popup>
  );
};

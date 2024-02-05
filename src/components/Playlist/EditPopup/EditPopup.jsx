import classNames from 'classnames/bind';
import styles from './EditPopup.module.scss';
import Popup from 'components/Popup';
import { useState } from 'react';
import { deletePlaylist, updatePlaylist } from 'api/playlist';

const cx = classNames.bind(styles);

export const EditPopup = ({ open, onClose, playlistData }) => {
  const [tab, setTab] = useState(0);
  const [newPlaylistName, setNewPlaylistName] = useState(playlistData.name);
  const [updateSongs, setUpdateSongs] = useState(playlistData.songs.map(song => song.id) || []);
  const [saveChange, setSaveChange] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState("");
  const [deleting, setDeleting] = useState(false);

  console.log(updateSongs)

  const HandleRemoveSong = (songId) => {
    const edit = updateSongs.filter((id) => id !== songId);
    setUpdateSongs(edit);
  };
  const CancleRemoveSong = (songId) => {
    const edit = [].concat(updateSongs);
    if (!edit.includes(songId)) {
      edit.push(songId);
    }
    setUpdateSongs(edit);
  };

  const HandleSaveChange = () => {
    if (newPlaylistName === '') {
      alert('Enter playlist name.');
    } else {
      setSaveChange(true);
      updatePlaylist(playlistData.id, newPlaylistName, updateSongs)
        .then((result) => {
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

  const HandleDeletePlaylist = () => {
    setDeleting(true)
    deletePlaylist(playlistData.id)
      .then(result => {
        if (result.result === true) {
          setDeleting(false);
          onClose();
        } else {
          throw Error();
        }
      })
      .catch(error => {
        alert("Delete playlist failed. Try again.")
        setDeleting(false)
      })
  }

  return (
    <Popup open={open} onClose={onClose} header={
      <div className={cx('tab-select')}>
          <button className={cx('tab-button')} disabled={tab === 0} onClick={() => setTab(0)}>
            Edit Playlist
          </button>
          <button className={cx('tab-button')} disabled={tab === 1} onClick={() => setTab(1)}>
            Delete Playlist
          </button>
        </div>
    }>
      {/* edit playlist */}
      <div className={cx('edit-playlist')} style={{ display: tab === 0 ? 'flex' : 'none' }}>
        <div className={cx('playlist-info')}>
          <div className={cx('playlist-name-label')}>Playlist name</div>
          <input className={cx('edit-name-input')}
            id="new-playlist-name"
            required
            placeholder="Required"
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e.target.value)}
          />
        </div>
        {playlistData.songs.length === 0 ? (
          <div style={{ fontSize: '14px', fontWeight: 'bold', color: 'black' }}>
            No song in this playlist
          </div>
        ) : (
          <div className={cx('playlist-songs')}>
            {playlistData.songs.map((song, index) => (
              <div key={index} className={cx('song-info')}>
                <img className={cx('song-img')} src={song.thumbNail} alt={song.name} />
                <div className={cx('song-artist-name')}>
                  {song.artistName} - {song.name}
                </div>
                {updateSongs.includes(song.id) ? (
                  <button className={cx('button-remove')} 
                  onClick={() => HandleRemoveSong(song.id)}
                  >Remove</button>
                ) : (
                  <button className={cx('button-removed')} 
                    onClick={() => CancleRemoveSong(song.id)}
                  >Removed</button>
                )}
              </div>
            ))}
          </div>
        )}
        <button className={cx('button-save')} disabled={saveChange} onClick={HandleSaveChange}>
          {saveChange ? 'Saving...' : 'Save'}
        </button>
      </div>
      {/* delete playlist */}
      <div className={cx('delete-playlist')} style={{ display: tab === 1 ? 'flex' : 'none' }}>
        <div style={{ fontSize: '14px', fontWeight: 'normal', color: 'black' }}>
          Type playlist's name to confirm action:&nbsp;
          <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'black' }}>
            {playlistData.name}
          </span>
        </div>
        <input className={cx('delete-confirm')}
          placeholder="Playlist's name"
          value={deleteConfirm}
          onChange={(e) => setDeleteConfirm(e.target.value)}
        />
        <button className={cx('button-delete')}
          disabled={deleteConfirm !== playlistData.name || deleting}
          onClick={HandleDeletePlaylist}
        >{deleting ? "Deleting" : "Delete"}</button>
      </div>
    </Popup>
  );
};

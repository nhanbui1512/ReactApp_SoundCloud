import classNames from 'classnames/bind';
import styles from './EditPopup.module.scss';
import Popup from 'components/Popup';
import { useEffect, useState } from 'react';
import { addSongsToPlaylist, deletePlaylist, removeSongsFromPlaylist } from 'api/playlist';

const cx = classNames.bind(styles);

export const EditPopup = ({ open, onClose, playlistData }) => {
  const [tab, setTab] = useState(0);
  const [newPlaylistName, setNewPlaylistName] = useState(playlistData.name);
  const [removeSongs, setRemoveSongs] = useState([])
  const [saveChange, setSaveChange] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (open) {
      setTab(0)
      setNewPlaylistName(playlistData.name)
      setRemoveSongs([])
      setSaveChange(false)
      setDeleteConfirm("")
      setDeleting(false)
    }
    // eslint-disable-next-line
  }, [open])

  const HandleRemoveSong = (songId) => {
    const edit = [].concat(removeSongs)
    if (!edit.includes(songId)) {
      edit.push(songId)
    }
    setRemoveSongs(edit)
  }
  const CancleRemoveSong = (songId) => {
    const edit = removeSongs.filter(id => id !== songId)
    setRemoveSongs(edit)
  }

  const HandleSaveChange = () => {
    if (newPlaylistName === '') {
      alert('Enter playlist name.');
    } else {
      setSaveChange(true)
      const promises = []
      if (removeSongs.length > 0) {
        const promise1 = removeSongsFromPlaylist(playlistData.id, removeSongs)
        promises.push(promise1)
      }
      if (newPlaylistName !== playlistData.name) {
        const promise2 = addSongsToPlaylist(playlistData.id, newPlaylistName, [])
        promises.push(promise2)
      }
      Promise.allSettled(promises)
        .then(results => {
          setSaveChange(false)
          onClose()
        })
        .catch(error => {
          alert("Save change failed. Try again")
          setSaveChange(false)
        })
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
                {removeSongs.includes(song.id) ? (
                  <button className={cx('button-removed')} 
                  onClick={() => CancleRemoveSong(song.id)}
                  >Removed</button>
                ) : (
                  <button className={cx('button-remove')} 
                  onClick={() => HandleRemoveSong(song.id)}
                  >Remove</button>
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

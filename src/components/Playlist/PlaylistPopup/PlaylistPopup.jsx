import classNames from 'classnames/bind'
import styles from './Playlist.module.scss'
import Popup from "components/Popup"
import { useState } from "react"

/* Usage:
  const [openPlaylistPopup, setOpenPlaylistPopup] = useState(false)
  ...
  return (
    ...
      <button onClick={() => setOpenPlaylistPopup(true)}>Add to playlist</button>
      <PlaylistPopup open={openPlaylistPopup} onClose={setOpenPlaylistPopup}/>
    ...
  )
*/

const cx = classNames.bind(styles)

export const PlaylistPopup = ({ open, onClose }) => {
  const [tab, setTab] = useState(0)

  return (
    <Popup open={open} onClose={onClose}
      header={
        <div className={cx('tab-select')}>
          <button disabled={tab === 0}
            onClick={() => setTab(0)}
          >Add to Playlist</button>
          <button disabled={tab === 1}
            onClick={() => setTab(1)}
          >Create Playlist</button>
        </div>
      }
    >
      {/* Add to Playlist */}
      <div className={cx('add-to-playlist')}
        style={{ display: tab === 0 ? 'flex' : 'none' }}
      >
        <input id='playlist-filter' placeholder='Filter playlists'/>
        <div className={cx('playlist-item')}>
          <label>Playlist 1</label>
          <button>Add to playlist</button>
        </div>
        <div className={cx('playlist-item')}>
          <label>Playlist 2</label>
          <button>Add to playlist</button>
        </div>
        <div className={cx('playlist-item')}>
          <label>Playlist 3</label>
          <button className={cx('added')}>Added</button>
        </div>
      </div>
      {/* Create Playlist */}
      <div className={cx('create-playlist')}
        style={{ display: tab === 1 ? 'flex' : 'none' }}
      >
        <label>Playlist title</label>
        <input id='playlist-name' 
          required
          placeholder='Required' 
        />
        <button>Save</button>
      </div>
    </Popup>
  )
}
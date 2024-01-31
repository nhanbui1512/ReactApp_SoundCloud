import classNames from 'classnames/bind'
import styles from './Playlist.module.scss'
import Popup from "components/Popup"
import { useContext, useEffect, useState } from "react"
import { addSongsToPlaylist, createPlaylist, getPlaylistsByUserId, removeSongsFromPlaylist } from 'api/playlist'
import { StorageContext } from 'context/Storage'

const cx = classNames.bind(styles)

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
/* const example = {
  "thumbNail": "http://localhost:3000/uploads/images/thumbNail-1706279697257",
  "id": 0,
  "name": "Example",
  //...
} */

export const PlaylistPopup = ({ open, onClose, songData }) => {
  const [tab, setTab] = useState(0)
  const [myPlaylist, setMyPlaylist] = useState([])
  const [filter, setFilter] = useState('')
  const [creatingPlaylist, setCreatingPlaylist] = useState(false)

  // get user id
  const storage = useContext(StorageContext)
  const userId = storage.userData.id

  useEffect(() => {
    if (open) {
      RefreshPlaylist()
    }
  }, [open])

  const RefreshPlaylist = () => {
    getPlaylistsByUserId(userId)
      .then(result => {
        console.log('get playlist', result.data.sort((a, b) => a.id - b.id))
        setMyPlaylist(result.data.sort((a, b) => a.id - b.id))
      })
      .catch(error => console.log(error))
  }

  const AddToPlaylist = (playlistId, playlistName) => {
    addSongsToPlaylist(playlistId, playlistName, [songData.id])
      .then(result => {
        if (result.result) {
          // success
          RefreshPlaylist()
        } else {
          // error
          alert('Added to playlist failed. Try again.')
        }
      })
      .catch(error => console.log(error))
  }

  const RemoveFromPlaylist = (playlistId) => {
    removeSongsFromPlaylist(playlistId, [songData.id])
      .then(result => {
        if (result.result) {
          // success
          RefreshPlaylist()
        } else {
          // error
          alert('Removed from playlist failed. Try again.')
        }
      })
      .catch(error => console.log(error))
  }

  const CreateNewPlaylist = () => {
    const name = document.getElementById('new-playlist-name').value
    if (name === "") {
      alert('Enter playlist name.')
    } else {
      setCreatingPlaylist(true)
      createPlaylist(name, [songData.id])
        .then(result => {
          if (result.result) {
            // success
            document.getElementById('new-playlist-name').value = ""
            onClose(false)
          } else {
            // error
            alert('Create playlist failed. Try again.')
          }
          setCreatingPlaylist(false)
        })
        .catch(error => {
          console.log(error)
          setCreatingPlaylist(false)
        })
    }
  }

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
      {/* Song info */}
      <div className={cx('song-info')}>
        <img src={songData.thumbNail}/>
        <div className={cx('song-artist-name')}>
          <h6>{songData.artistName}</h6>
          <h5>{songData.name}</h5>
        </div>
      </div>
      {/* Add to Playlist */}
      <div className={cx('add-to-playlist')}
        style={{ display: tab === 0 ? 'flex' : 'none' }}
      >
        <input 
          id='playlist-filter' 
          placeholder='Filter playlists' 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className={cx('playlist-group')}>
          {myPlaylist.filter(x => x.name.toLowerCase().includes(filter.toLowerCase())).length === 0 &&
            <h6>No playlist found</h6>
          }
          {myPlaylist.filter(x => x.name.toLowerCase().includes(filter.toLowerCase()))
            .map((item, index) => (
              <div className={cx('playlist-item')} key={index}>
                <label>{item.name}</label>
                {item.songs.map(song => song.id).includes(songData.id) ? 
                  <button className={cx('added')} onClick={() => RemoveFromPlaylist(item.id)}>Added</button>
                  : <button onClick={() => AddToPlaylist(item.id, item.name)}>Add to playlist</button>
                }
              </div>
          ))}
        </div>
      </div>
      {/* Create Playlist */}
      <div className={cx('create-playlist')}
        style={{ display: tab === 1 ? 'flex' : 'none' }}
      >
        <label>Playlist name</label>
        <input id='new-playlist-name' 
          required
          placeholder='Required' 
        />
        <button disabled={creatingPlaylist} 
          onClick={CreateNewPlaylist}
        >{creatingPlaylist ? 'Saving...' : 'Save'}</button>
      </div>
    </Popup>
  )
}
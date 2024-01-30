import classNames from 'classnames/bind'
import styles from './Playlist.module.scss'
import Popup from "components/Popup"
import { useEffect, useState } from "react"
import { getPlaylists } from 'api/playlist'

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

const example = {
  "thumbNail": "http://localhost:3000/uploads/images/thumbNail-1706279697257",
  "linkFile": "http://localhost:3000/uploads/audios/song-1706279696740",
  "durationTime": "02:13",
  "createAtTimeFormat": "21:34 26/01/2024",
  "id": 12,
  "name": "Alea jacta est",
  "description": "Final showdown",
  "numberOfListen": 0,
  "numberOfLoop": 0,
  "duration": 133.752,
  "artistName": "BlackY",
  "createAt": "2024-01-26T14:34:57.000Z",
  "updateAt": null,
  "genre": {
      "id": 1,
      "name": "Classical"
  },
  "owner": {
      "avatar": "http://localhost:3000/uploads/images/defaultAvatar.png",
      "createAtFormatTime": "21:12:37 26/01/2024",
      "updateAtFormatTime": null,
      "id": 6,
      "userName": "Quốc",
      "email": "quoc@gmail.com",
      "city": "",
      "country": "",
      "bio": "",
      "createAt": "2024-01-26T14:12:37.000Z",
      "updateAt": null
  }
}
export const PlaylistPopup = ({ open, onClose, songData = example }) => {
  const [tab, setTab] = useState(0)
  const [myPlaylist, setMyPlaylist] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    if (open) {
      RefreshPlaylist()
    }
  }, [open])

  const RefreshPlaylist = () => {
    getPlaylists()
      .then(result => {
        // console.log('get playlist', result.data.sort((a, b) => a.id - b.id))
        setMyPlaylist(result.data.sort((a, b) => a.id - b.id))
      })
      .catch(error => console.log(error))
  }
  const AddToPlaylist = (playlistId) => {
    alert(`Added songId ${songData.id} to playlistId ${playlistId}`)
    RefreshPlaylist()
  }
  const CreateNewPlaylist = () => {
    const name = document.getElementById('new-playlist-name').value
    if (name === "") {
      alert('Enter playlist name!')
    } else {
      alert(`Playlist ${name} created`)
      document.getElementById('new-playlist-name').value = ""
      onClose(false)
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
            .map((item, index) => 
              <div className={cx('playlist-item')} key={index}>
                <label>{item.name}</label>
                <button onClick={() => AddToPlaylist(item.id)}>Add to playlist</button>
                {/* <button className={cx('added')}>Added</button> */}
              </div>
          )}
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
        <button onClick={CreateNewPlaylist}>Save</button>
      </div>
    </Popup>
  )
}
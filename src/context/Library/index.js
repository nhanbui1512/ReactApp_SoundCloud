import { createContext, useEffect, useState } from 'react';

import { getSongs, getSongsLiked } from 'api/songs';
import { getMyFollowingPlaylist } from 'api/playlist';
import { getFollowing } from 'api/follow';

export const LibraryContext = createContext();

function GlobalLibrary({ children }) {
  const [dataSongs, setDataSongs] = useState([]);
  const [dataSongLikes, setDataSongLikes] = useState([]);
  const [dataPlaylists, setDataPlaylists] = useState([]);
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // getSongs
      const Songs = await getSongs();
      setDataSongs(Songs.data);

      // getSongLikes
      var SongLikes = await getSongsLiked();
      SongLikes = SongLikes.data.map((songLike) => {
        songLike.song.isLiked = true;
        return songLike.song;
      });
      setDataSongLikes(SongLikes);

      // getPlaylists
      const Playlists = await getMyFollowingPlaylist();
      setDataPlaylists(Playlists.data);

      // getUserFollowed
      var Users = await getFollowing();
      Users = Users.data.data.map((user) => {
        return user.following;
      });
      setDataUsers(Users);
    };
    getData();
  }, []);

  const states = {
    dataSongs,
    setDataSongs,
    dataSongLikes,
    setDataSongLikes,
    dataPlaylists,
    setDataPlaylists,
    dataUsers,
    setDataUsers,
  };
  return <LibraryContext.Provider value={states}>{children}</LibraryContext.Provider>;
}

export default GlobalLibrary;
import { createContext, useEffect, useState } from 'react';

import { getSongs } from 'api/songs';
import { getMyFollowingPlaylist } from 'api/playlist';
import { getFollowing } from 'api/follow';
import { useNavigate } from 'react-router-dom';

export const LibraryContext = createContext();

function GlobalLibrary({ children }) {
  const [dataSongs, setDataSongs] = useState([]);
  const [dataPlaylists, setDataPlaylists] = useState([]);
  const [dataUsers, setDataUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        // getSongs
        const Songs = await getSongs();
        setDataSongs(Songs.data);

        // getPlaylists
        const Playlists = await getMyFollowingPlaylist();
        setDataPlaylists(Playlists.data);

        // getUserFollowed
        var Users = await getFollowing();
        Users = Users.data.data.map((user) => {
          return user.following;
        });
        setDataUsers(Users);
      } catch (error) {
        navigate('/login');
      }
    };
    getData();
  }, [navigate]);

  const states = {
    dataSongs,
    setDataSongs,
    dataPlaylists,
    setDataPlaylists,
    dataUsers,
    setDataUsers,
  };
  return <LibraryContext.Provider value={states}>{children}</LibraryContext.Provider>;
}

export default GlobalLibrary;

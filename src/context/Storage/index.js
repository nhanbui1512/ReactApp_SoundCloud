import { createContext, useState } from 'react';
import images from 'assets/images';
import musics from 'assets/musics';

export const StorageContext = createContext();

function GlobalStates({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [currentMusic, setCurrentMusic] = useState({
    thumbNail: images.taylorSwift,
    linkFile: musics.enchanted,
    durationTime: '5:53',
    createAtTimeFormat: '22:05 26/01/2024',
    id: 35,
    name: 'Enchanted',
    description: 'From Cytus',
    numberOfListen: 0,
    numberOfLoop: 0,
    duration: 166.752,
    artistName: 'Tayler Swift',
    createAt: '2024-01-26T15:05:31.000Z',
    updateAt: null,
    genre: {
      id: 1,
      name: 'Classical',
    },
    owner: {
      avatar: 'http://localhost:3000/uploads/images/defaultAvatar.png',
      createAtFormatTime: '22:01:38 26/01/2024',
      id: 9,
      userName: 'Nhật Huy',
      email: 'notanemail@mail.com',
      city: '',
      country: '',
      bio: '',
      createAt: '2024-01-26T15:01:38.000Z',
      updateAt: null,
    },
    likeCount: 0,
    isLiked: false,
  });

  const states = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
    currentMusic,
    setCurrentMusic,
  };

  return <StorageContext.Provider value={states}>{children}</StorageContext.Provider>;
}

export default GlobalStates;

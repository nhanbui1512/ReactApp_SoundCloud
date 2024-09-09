export const handleLogicPlay = ({ event, storage, playLists, data, setIsPlay }) => {
  event.preventDefault();
  const audioTag = storage.audioRef.current;
  // nếu dữ liệu truyền vào gallery ko phải là playlist
  if (!playLists) {
    // Nếu dữ liệu của gallary # dữ liệu bài hát đang được load thì set lại state
    if (storage.currentMusic.id !== data.id) {
      storage.setCurrentPlayList([data]);
      storage.setCurrentMusic(data);
      if (storage.playlistId !== -1) storage.setPlaylistId(-1);

      const playMusic = (e) => {
        e.target.play();
        setIsPlay(true);
        audioTag.removeEventListener('loadeddata', playMusic);
      };
      audioTag.addEventListener('loadeddata', playMusic);
      return; // thoát khỏi hàm
    }

    // Nếu đang bài đang phát giống với bài của gallary
    if (audioTag.paused) {
      // Đang dừng thì hiển thị nút Play
      audioTag.play();
      // setIsPlay(true);
    } else {
      // Đang phát thì hiển thị nút pause
      audioTag.pause();
      // setIsPlay(false);
    }
  } else {
    storage.setCurrentPlayList(data.songs);
    storage.setCurrentMusic(data.songs[0]);
    const playMusic = (e) => {
      e.target.play();
      setIsPlay(true);
      audioTag.removeEventListener('loadeddata', playMusic);
    };
    audioTag.addEventListener('loadeddata', playMusic);
    return; // thoát khỏi hàm
  }
};

export function handleFollow() {}

export const handleLogicAddNextUp = ({ playLists, storage, data, toast }) => {
  if (!playLists) {
    // nếu đã tồn tại trong playlsit -> thay đổi vị trí của nó lên sau bài đang phát
    const indexPlaying = storage.currentPlayList.indexOf(storage.currentMusic);
    const indexOfSongInPlaylist = storage.currentPlayList.findIndex((item) => item.id === data.id);
    storage.setCurrentPlayList((prev) => {
      const newState = [...prev];
      // đảm bảo bài muốn thêm vào sau không phải là bài đang phát
      // 2 trường hợp : không được phát nhưng tồn tại trong pl , không được phát và cũng không tồn tại trong pl
      if (storage.currentPlayList[indexPlaying]?.id !== data.id) {
        if (indexOfSongInPlaylist !== -1) {
          // Xóa phần tử khỏi vị trí cũ
          newState.splice(indexOfSongInPlaylist, 1);

          // Nếu phần tử nằm trên vị trí đang phát, giảm indexPlaying để điều chỉnh vị trí
          const newIndexPlaying =
            indexOfSongInPlaylist < indexPlaying ? indexPlaying - 1 : indexPlaying;

          // Chèn phần tử vào sau vị trí đang phát (điều chỉnh)
          newState.splice(newIndexPlaying + 1, 0, data);
        } else {
          // Chèn phần tử song vào sau vị trí đang phát nếu không tồn tại trong danh sách
          newState.splice(indexPlaying + 1, 0, data);
        }
      }
      return newState;
    });
  } else {
    let songs = data.songs.filter((song) => {
      return !storage.currentPlayList.includes(song);
    });
    storage.setCurrentPlayList((prev) => {
      return [...prev, ...songs];
    });
  }
};

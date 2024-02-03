import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import app from '../app';

const storage = getStorage(app);
const audioFolder = ref(storage, 'audio');

export async function getAudioUrlByPath(path) {
  const pathRef = ref(audioFolder, path);
  const url = getDownloadURL(pathRef).catch((error) => {
    console.log(error);
    return null;
  });
  return url;
}

export async function uploadAudio(file, path) {
  const audioRef = ref(audioFolder, path);
  const uploadUrl = await uploadBytes(audioRef, file)
    .then(async (snapshot) => {
      const url = await getDownloadURL(snapshot.ref);
      return url;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
  return uploadUrl;
}

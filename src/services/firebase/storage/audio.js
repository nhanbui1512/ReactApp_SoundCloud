import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import app from '../app';

const storage = getStorage(app);
const audioFolder = ref(storage, 'audio');

export async function getAudioUrlByPath(path) {
    const pathRef = ref(audioFolder, path) 
    getDownloadURL(pathRef)
        .then(url => {
            console.log(url)
            return url
        })
        .catch(error => {
            console.log(error)
            return null
        })
}
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import app from '../app';

const storage = getStorage(app);
const imagesFolder = ref(storage, 'images');

export async function getImageUrlByPath(path) {
    const pathRef = ref(imagesFolder, path) 
    getDownloadURL(pathRef)
        .then(url => {
            console.log(url)
            return url
        })
        .catch(error => console.log(error))
}
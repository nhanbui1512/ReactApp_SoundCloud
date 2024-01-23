import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import app from '../app';

const storage = getStorage(app);
const imagesFolder = ref(storage, 'images');

export async function getImageUrlByPath(path) {
    const pathRef = ref(imagesFolder, path) 
    const url = await getDownloadURL(pathRef)
        .catch(error => {
            console.log(error)
            return null
        })
    console.log(url)
    return url
}

export async function uploadImage(file, path) {
    const imageRef = ref(imagesFolder, path)
    const uploadTask = uploadBytesResumable(imageRef, file)
    uploadTask.on('state_changed',
        // uploading
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)
            console.log(progress)
        },
        // failed
        (error) => {
            console.log(error)
        },
        // success
        () => {
            getDownloadURL(uploadTask.snapshot.ref)
                .then(url => {
                    console.log(url)
                    return url
                })
                .catch(error => {
                    console.log(error)
                    return null
                })
        }
    )
}
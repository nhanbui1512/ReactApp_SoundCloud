import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import app from '../app';

const storage = getStorage(app);
const audioFolder = ref(storage, 'audio');

export async function getAudioUrlByPath(path) {
    const pathRef = ref(audioFolder, path) 
    const url = getDownloadURL(pathRef)
        .catch(error => {
            console.log(error)
            return null
        })
    console.log(url)
    return url
}

export async function uploadAudio(file, path) {
    const audioRef = ref(audioFolder, path)
    const uploadTask = uploadBytesResumable(audioRef, file)
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
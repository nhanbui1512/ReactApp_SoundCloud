import { getFirestore, collection, getDocs, where, query, addDoc } from 'firebase/firestore/lite';
import app from '../app';
import { v4 as uuidv4 } from 'uuid';
import { uploadAudio } from '../storage/audio';
import { uploadImage } from '../storage/images';

const db = getFirestore(app)
const songsCol = collection(db, 'songs')

export async function getAllSongs() {
    const songsSnap = await getDocs(songsCol)
        .catch(error => {
            console.log(error)
            return null
        })
    const songs = songsSnap.docs.map(doc => doc.data())
    // console.log(songs)
    return songs
}

export async function getSongsById(id) {
    const q = query(songsCol, where('id', '==', id))
    const songsSnap = await getDocs(q)
        .catch(error => {
            console.log(error)
            return null
        })
    const songs = songsSnap.docs.map(doc => doc.data())
    // console.log(songs)
    return songs
}

export async function getSongsByName(name) {
    const allSongs = await getAllSongs()
    const songs = allSongs?.filter(song => song.name.toLowerCase().includes(name.toLowerCase()))
    // console.log(songs)
    return songs
}

export async function createSongs(name, artistId, genreId, uploaderId, audioFile, description = String(), imageFile = null) {
    const id = uuidv4()
    console.log("song uploading")
    const audioUrl = audioFile ? await uploadAudio(audioFile, id) : null
    if (audioUrl === null) {
        console.log("upload failed: no audio file selected")
        return null
    }
    const imageUrl = imageFile ? await uploadImage(imageFile, id) : null
    const songField = {
        artist: artistId,
        description: description,
        genre: genreId,
        id: id,
        imageUrl: imageUrl,
        like_count: 0,
        link: audioUrl,
        name: name,
        play_count: 0,
        uploader: uploaderId,
        upload_time: Date.now()
    }
    await addDoc(songsCol, songField)
        .catch(error => {
            console.log(error)
            return null
        })
    console.log(songField)
    return id
}
import { getFirestore, collection, getDocs, where, query, addDoc } from 'firebase/firestore/lite';
import app from '../app';
import { v4 as uuidv4 } from 'uuid';

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

export async function getSongsByGenre(genreId) {
    const q = query(songsCol, where('genre', '==', genreId))
    const songsSnap = await getDocs(q)
        .catch(error => {
            console.log(error)
            return null
        })
    const songs = songsSnap.docs.map(doc => doc.data())
    // console.log(songs)
    return songs
}

export async function createSongs(name, artistId, genreId, uploaderId, mediaUrl, description = String()) {
    const id = uuidv4()
    const songField = {
        artist: artistId,
        description: description,
        genre: genreId,
        id: id,
        like_count: 0,
        link: mediaUrl,
        name: name,
        play_count: 0,
        uploader: uploaderId,
        upload_day: null
    }
    await addDoc(songsCol, songField)
        .catch(error => {
            console.log(error)
            return null
        })
    // console.log(songField)
    return id
}
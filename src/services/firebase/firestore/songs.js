import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore/lite';
import app from 'services/firebase/app';

const db = getFirestore(app);
const songsCol = collection(db, 'songs')

export async function getAllSongs() {
    const songsSnap = await getDocs(songsCol)
    const songsList = songsSnap.docs.map(doc => doc.data())
    // console.log(songsList)
    return songsList
}

export async function getSongById(id) {
    const q = query(songsCol, where('id', '==', id))
    const songsSnap = await getDocs(q)
    const song = songsSnap.docs.map(doc => doc.data())
    // console.log(song)
    return song
}

export async function getSongsByName(name) {
    const allSongs = await getAllSongs()
    const songs = allSongs.filter(song => song.name.toLowerCase().includes(name.toLowerCase()))
    // console.log(songs)
    return songs
}
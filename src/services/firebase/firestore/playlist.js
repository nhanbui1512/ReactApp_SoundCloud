// import { getFirestore, collection, getDocs, where, query, addDoc } from 'firebase/firestore/lite';
// import app from '../app';
// import { v4 as uuidv4 } from 'uuid';

// const db = getFirestore(app)
// const playlistsCol = collection(db, 'playlists')

// export async function getAllPlaylists() {
//     const playlistsSnap = await getDocs(playlistsCol)
//         .catch(error => {
//             console.log(error)
//             return null
//         })
//     const playlists = playlistsSnap.docs.map(doc => doc.data())
//     // console.log('all playlist', playlists)
//     return playlists
// }

// export async function getPlaylistsById(id) {
//     const q = query(playlistsCol, where('id', '==', id))
//     const playlistsSnap = await getDocs(q)
//         .catch(error => {
//             console.log(error)
//             return null
//         })
//     const playlists = playlistsSnap.docs.map(doc => doc.data())
//     // console.log(playlists)
//     return playlists
// }

// export async function getPlaylistsByName(name) {
//     const allPlaylists = await getAllPlaylists()
//     const playlists = allPlaylists?.filter(playlist => playlist.name.toLowerCase().includes(name.toLowerCase()))
//     // console.log('play list by name', name, playlists)
//     return playlists
// }

// export async function createPlaylist(name, userId) {
//     const id = uuidv4()
//     const playlistField = {
//         id: id,
//         name: name,
//         user: userId,
//         create_at: null,
//         songs: []
//     }
//     await addDoc(playlistsCol, playlistField)
//         .catch(error => {
//             console.log(error)
//             return null
//         })
//     // console.log(playlistField)
//     return id
// }

// export async function addSongToPlaylist() {
//     // to do
// }
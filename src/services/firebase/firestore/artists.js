// import { getFirestore, collection, getDocs, where, query, addDoc } from 'firebase/firestore/lite';
// import app from '../app';
// import { v4 as uuidv4 } from 'uuid';

// const db = getFirestore(app)
// const artistsCol = collection(db, 'artists')

// export async function getAllArtists() {
//     const artistsSnap = await getDocs(artistsCol)
//         .catch(error => {
//             console.log(error)
//             return null
//         })
//     const artists = artistsSnap.docs.map(doc => doc.data())
//     // console.log(artists)
//     return artists
// }

// export async function getArtistsById(id) {
//     const q = query(artistsCol, where('id', '==', id))
//     const artistsSnap = await getDocs(q)
//         .catch(error => {
//             console.log(error)
//             return null
//         })
//     const artists = artistsSnap.docs.map(doc => doc.data())
//     // console.log(artists)
//     return artists
// }

// export async function getArtistsByName(name) {
//     const allArtists = await getAllArtists()
//     const artists = allArtists?.filter(artist => artist.name.toLowerCase().includes(name.toLowerCase()))
//     // console.log(artists)
//     return artists
// }

// export async function createArtist(name, about = String(), avatar = String()) {
//     const id = uuidv4()
//     const artistField = {
//         id: id,
//         name: name,
//         about: about,
//         avatar: avatar
//     }
//     await addDoc(artistsCol, artistField)
//         .catch(error => {
//             console.log(error)
//             return null
//         })
//     // console.log(artistField)
//     return id
// }
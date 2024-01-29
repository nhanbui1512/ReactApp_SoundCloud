// import { getFirestore, collection, getDocs, where, query, addDoc } from 'firebase/firestore/lite';
// import app from '../app';
// import { v4 as uuidv4 } from 'uuid';

// const db = getFirestore(app)
// const genreCol = collection(db, 'genre')

// export async function getAllGenres() {
//     const genreSnap = await getDocs(genreCol)
//         .catch(error => {
//             console.log(error)
//             return null
//         })
//     const genres = genreSnap.docs.map(doc => doc.data())
//     // console.log(genres)
//     return genres
// }

// export async function getGenresById(id) {
//     const q = query(genreCol, where('id', '==', id))
//     const genreSnap = await getDocs(q)
//         .catch(error => {
//             console.log(error)
//             return null
//         })
//     const genres = genreSnap.docs.map(doc => doc.data())
//     // console.log(genres)
//     return genres
// }

// export async function getGenresByName(name) {
//     const allGenres = await getAllGenres()
//     const genres = allGenres?.filter(genre => genre.name.toLowerCase().includes(name.toLowerCase()))
//     // console.log(genres)
//     return genres
// }

// export async function createGenre(name) {
//     const id = uuidv4()
//     const genreField = {
//         name: name,
//         id: id
//     }
//     await addDoc(genreCol, genreField)
//         .catch(error => {
//             console.log(error)
//             return null
//         })
//     // console.log(genreField)
//     return id
// }
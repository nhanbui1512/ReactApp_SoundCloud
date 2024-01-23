import { getFirestore, collection, getDocs, where, query, addDoc } from 'firebase/firestore/lite';
import app from '../app';
import { v4 as uuidv4 } from 'uuid';

const db = getFirestore(app)
const usersCol = collection(db, 'users')

export async function getAllUsers() {
    const usersSnap = await getDocs(usersCol)
        .catch(error => {
            console.log(error)
            return null
        })
    const users = usersSnap.docs.map(doc => doc.data())
    // console.log(users)
    return users
}

export async function getUsersById(id) {
    const q = query(usersCol, where('id', '==', id))
    const usersSnap = await getDocs(q)
        .catch(error => {
            console.log(error)
            return null
        })
    const users = usersSnap.docs.map(doc => doc.data())
    // console.log(users)
    return users
}

export async function getUsersByName(name) {
    const allUsers = await getAllUsers()
    const users = allUsers?.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))
    // console.log(users)
    return users
}

export async function createUser(name, isMale, birthday, avatarUrl = String()) {
    const id = uuidv4()
    const userField = {
        id: id,
        name: name,
        isMale: isMale,
        birthday: birthday,
        avatar: avatarUrl
    }
    await addDoc(usersCol, userField)
        .catch(error => {
            console.log(error)
            return null
        })
    // console.log(users)
    return id
}
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import app from '../app';

const storage = getStorage(app);
const imagesFolder = ref(storage, 'images');

export async function getImageUrlByPath(path) {
  const pathRef = ref(imagesFolder, path);
  const url = await getDownloadURL(pathRef).catch((error) => {
    console.log(error);
    return null;
  });
  console.log(url);
  return url;
}

export async function uploadImage(file, path) {
  const imageRef = ref(imagesFolder, path);
  const uploadUrl = await uploadBytes(imageRef, file)
    .then(async (snapshot) => {
      const url = await getDownloadURL(snapshot.ref);
      return url;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
  return uploadUrl;
}

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB24saGJGqmzj-lGlH4VkJjvwukbMxpyLs",
    authDomain: "ang-photo.firebaseapp.com",
    projectId: "ang-photo",
    storageBucket: "ang-photo.appspot.com",
    messagingSenderId: "348092320778",
    appId: "1:348092320778:web:6e8c331c8b54362126e3f3",
    measurementId: "G-3ER6B6YN9W"
  }

  firebase.initializeApp(config)

  export const firestorage = firebase.storage(); 
  export const firestore = firebase.firestore();

  export const storageRef = firestorage.ref();
  export const storageGalleryImagesRef = storageRef.child('gallery-images');

export function addToGallery(collection, index, title, description, imageUrl, thumbnail){
    firestore.collection(collection).doc(String.toString(index)).set({
        title: title,
        description: description,
        imageUrl: imageUrl,
        thumbnail: thumbnail
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

export const auth = firebase.auth()
export default firebase

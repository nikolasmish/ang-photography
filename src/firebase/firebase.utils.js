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

export const getGalleryImages = async () => {
    console.log('FETCHING')
    let temp = []
    const peopleRef=firestore.collection('gallery-images').orderBy('createdAt', 'desc');
    
    const data=await peopleRef.get();
    data.docs.forEach((item)=>{
        temp.push(item.data())
    })

    return temp
}

export const getBlogPosts = async () => {
    console.log('FETCHING')
    let temp = []
    const blogRef = firestore.collection('blogs');
    
    const data=await blogRef.get();
    data.docs.forEach((item)=>{
        temp.push(item.data())
    })

    return temp
}

export const getSpecificBlogPost = async (blogId) => {
    let temp = [];
    const specificBlogRef = firestore.collection('blogs').where('blogId', '==', blogId);
    await specificBlogRef.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            temp = doc.data()
        })
    })

    console.log(temp)
    return temp
    
}

export const addToGallery = async (title, description, imageUrl, thumbnail) => {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp;
    firestore.collection('gallery-images').add({
        title: title,
        description: description,
        imageUrl: imageUrl,
        thumbnail: thumbnail,
        createdAt: timestamp()
    })
    .then((item) => {
        item.update({id: item.id})
        alert('Success!')
    })
    .catch((error) => {
        alert('Error: ' + error)
    });
}

export const removeFromGallery = async (id) => {
    firestore.collection('gallery-images').doc(id.toString()).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}


export const auth = firebase.auth()
export default firebase

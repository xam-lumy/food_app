import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import {getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { 
    getFirestore, 
    collection, 
    getDocs,
    getDoc,
    addDoc,
    doc,
    setDoc
    } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI9s8NB9HYIePff4efUWeaZLYqLZOXFj8",
  authDomain: "food-auth-8036a.firebaseapp.com",
  projectId: "food-auth-8036a",
  storageBucket: "food-auth-8036a.appspot.com",
  messagingSenderId: "594194316622",
  appId: "1:594194316622:web:0f1a7bd05233dc58ac321f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firestore init service

// Initialize firebase authentication
const auth = getAuth()
// Initialize firestore
export const db = getFirestore()


export const getDesertData = async() => {
  const desertRef = collection(db, 'desert')
  if(!desertRef) return;
  try {
    const deserts = await getDocs(desertRef)
    const desertts = []
   return deserts.forEach((desert) => {
   
    const {name, description, quantity, image, price} = desert.data()

    desertts.push({
      id: desert.id,
      name,
      description,
      price,
      quantity,
      image
    })
  })
  setDesert(desertts)
  } catch(err) {
    console.log(err)
  }
 
  
}


export const getGetTogetherData = async() => {
  const getTogetherRef = collection(db, 'getTogether')
  if(!getTogetherRef) return;
  try {
    const items = await getDocs(getTogetherRef)
   return items.forEach((item) => 
      item.data()
    )
  } catch(err) {
    console.log(err)
  }
}

const desertRef = collection(db, 'desert')
export const createUserDocument = async (userAuth, additionalInformation={}) => {
  if(!userAuth) return
 const userDocRef = doc(db, 'users', userAuth.uid)
const userSnapshot = await getDoc(userDocRef)
if(!userSnapshot.exists()){
const { displayName, email } = userAuth;
const createdAt = new Date();
try {
  await setDoc(userDocRef, {
    displayName,
    email,
    createdAt,
    ...additionalInformation
  })
} catch(err) {
  console.log(err.message)
}

return userSnapshot;
}



}

// authorize user with email and password

export const createUserAuthWIthEmailAndPassword = async(email, password) => {
    if(!email || !password) return
   
     return   await createUserWithEmailAndPassword(auth, email, password)
   
} 
export const signinUserAuth =  async(email, password) => {
  if(!email || !password)
   return;
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async() => {
  return await signOut(auth)
}






 

 
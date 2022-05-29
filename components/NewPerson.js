import { Alert, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { gStyle } from '../styles/style'
import { auth, db } from './firebase';
import { collection, getDocs, setDoc, doc } from "firebase/firestore"; 

const NewPerson = ({ el }) => {

  const handlePress = async () => {
    const querySnapshot = await getDocs(collection(db, "maps"));
    const maps = []
    querySnapshot.forEach((doc) => {
      maps.push(doc.data())
    })
    
    find: {
      for (var i = 0; i < maps.length; i++){
        if (
            maps[i].email1 == el.email && maps[i].email2 == auth.currentUser?.email ||
            maps[i].email1 == auth.currentUser?.email && maps[i].email2 == el.email
           ) {
          Alert.alert('map has already been created!')
          break find;
        } 
      }
      try {
        var key = Math.random().toString().substring(7)
        const docRef = setDoc(doc(db, "maps", key), {
            email1: el.email,
            email2: auth.currentUser?.email,
            key:key
        });
        console.log("Document written with ID: ", key);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
  }
  

  return (
    <TouchableOpacity style={gStyle.newPersonWindow} onPress={handlePress}>
      <Text style={gStyle.mainText}>{el.email}</Text>
      <Text style={gStyle.mainText}>Create!</Text>
    </TouchableOpacity>
  )
}

export default NewPerson


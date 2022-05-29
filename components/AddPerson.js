import { Text, View, SafeAreaView, FlatList, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { gStyle } from '../styles/style';
import React, { useState } from 'react'
import { auth, db } from './firebase';
import { collection, getDocs } from "firebase/firestore";
import NewPerson from './NewPerson';


const AddPerson = () => {

  const [searchedUsers, setUsers] = useState([])

  const [listOfUsers, setList] = useState([]);


  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = []
    querySnapshot.forEach((doc) => {
      users.push(doc.data())
    })
    setList(users)
  }

  const handleChange = (text) => {
    getUsers()
    if (text != '') {
      setUsers(listOfUsers.filter(item => 
        item.email.search(text) != -1 
      )
    )
    } else {
      setUsers([])
    }
  }

    

  return (
    <SafeAreaView style={gStyle.mainContainer}>
      <View style={gStyle.headerContacts}>
        <Text style={gStyle.mainTitle}>Create new map</Text>
        <Text style={gStyle.mainText}>Your email: {auth.currentUser?.email}</Text>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={gStyle.logContainer}>
          <TextInput
            placeholder="another user's email"
            onChangeText={handleChange}      
            style={gStyle.input}
          />
          <FlatList data={searchedUsers} style={gStyle.List} renderItem={({ item }) => (<NewPerson el={item}/>)}/>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default AddPerson


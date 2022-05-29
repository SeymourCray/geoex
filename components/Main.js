import { Text, View, SafeAreaView, FlatList, Button } from 'react-native'
import { gStyle } from '../styles/style';
import React, { useEffect,useState } from 'react'
import { auth, db } from './firebase';
import Person from './Person';
import { useNavigation } from '@react-navigation/native';
import { collection, query, onSnapshot } from "firebase/firestore";


const Main = () => {
  const navigation = useNavigation()
  const [listOfUsers, setList] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "maps"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const maps = [];
      querySnapshot.forEach((doc) => {
        maps.push(doc.data());
      });
      var newMaps = maps.filter(item => item.email1 == auth.currentUser?.email || item.email2 == auth.currentUser?.email)
      setList(newMaps)
    })
    return unsubscribe
  },[])

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => { navigation.replace('Login') })
      .catch(error=>alert(error.message))
  }

  

  return (
    <SafeAreaView style={gStyle.mainContainer}>
      <View style={gStyle.headerHome}>
        <Text style={gStyle.mainTitle}>Maps</Text>
        <Button
          title='Sign out'
          color='#add8ff'
          onPress={handleSignOut}
        />
      </View>
      <FlatList data={listOfUsers} style={gStyle.List} renderItem={({ item }) => (<Person el={item}/>)}/>
    </SafeAreaView>
  )
}

export default Main


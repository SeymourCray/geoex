import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { gStyle } from '../styles/style'
import { useNavigation } from '@react-navigation/native'
import { auth } from './firebase';


const Person = ({el}) => {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('Map', { map: el} )
  }

  return (
    <TouchableOpacity style={gStyle.personWindow} onPress={handlePress}>
      <Text style={gStyle.boldText}>{el.email1==auth.currentUser?.email?el.email2:el.email1}</Text>
    </TouchableOpacity>
  )
}

export default Person


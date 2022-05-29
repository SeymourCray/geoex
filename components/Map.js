import { React, useRef, useState, useEffect } from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { TouchableOpacity, Text, View, Animated, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MapStyle } from '../styles/map';
import { useNavigation } from '@react-navigation/native';
import { gStyle } from '../styles/style';
import { collection, query, onSnapshot, setDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from './firebase';


export default function Map({route}) {

  const navigation = useNavigation()

  const { map } = route.params;

  const Board = useRef(new Animated.ValueXY({ x: 0, y: -100 })).current;
  
  const [ListOfMarkers, setMarkers] = useState([])

  const [currentMarker, setMarker] = useState({})

  const [text, setText] = useState('')


  useEffect(() => {
    const q = query(collection(db, 'maps', map.key, 'markers'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const markers = [];
      querySnapshot.forEach((doc) => {
        markers.push(doc.data());
      });
      setMarkers(markers)
    })
    return unsubscribe
  },[])

  const downBoard = () => {
        Animated.spring(
            Board,
            {
                toValue: {
                    x: 0,
                    y: 120
              },
              useNativeDriver:false
            }
        ).start()
  }
  
  const upBoard = () => {
        Keyboard.dismiss()
        Animated.spring(
            Board,
            {
                toValue: {
                    x: 0,
                    y: -100
              },
              useNativeDriver:false
            }
        ).start()
    }

    
  const handleMapPress = (event) => {
    if (event.nativeEvent.position) {
      setMarkers([
      ...ListOfMarkers,
      {
        key: Math.random().toString().substring(7),
        coordinate: event.nativeEvent.coordinate,
        note:''
      }
      
      ])
      try {
        var key = Math.random().toString().substring(7)
        const docRef = setDoc(doc(db, "maps", map.key, 'markers', key), {
            key: key,
            coordinate: event.nativeEvent.coordinate,
            note: ''
        });
        console.log("Document written with ID: ", key);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
  }

  
  const deleteMarker = async () => {
    upBoard()
    setMarkers((list) => {
      return list.filter(ListOfMarkers=>ListOfMarkers.key!=currentMarker.key)
    })
    await deleteDoc(doc(db, "maps", map.key, 'markers', currentMarker.key));
    return () => {
      setMarker({}); 
    };
  }

  
  const saveNote = async () => {
    upBoard()
    currentMarker.note = text
    const docRef = doc(db, "maps", map.key, 'markers', currentMarker.key)
    await updateDoc(docRef, {
      note: text
    });
  }

  const onChange = (text) => {
    setText(text)
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
      upBoard()
    }}>
      <View style={gStyle.mainContainer}>
        <View style={gStyle.headerMap}>
          <Text style={gStyle.boldText}>{map.email1==auth.currentUser?.email?map.email2:map.email1}</Text>
        </View>
        <Animated.View style={[Board.getLayout(), gStyle.board]}>
          <TextInput
              multiline={true}
              placeholder={'Your note...'}
            style={gStyle.addNote}
            onChangeText={onChange}
            >{text}
            </TextInput>
            <View style={gStyle.delSaveView}>
              <TouchableOpacity style={gStyle.delSaveButton} onPress={saveNote}>
                <Text style={gStyle.boldText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={gStyle.delSaveButton} onPress={deleteMarker}>
                <Text style={gStyle.boldText}>Delete</Text>
              </TouchableOpacity>
            </View>
        </Animated.View>
        <MapView  initialRegion={{
        latitude: 55.558741,
        longitude: 37.378847,
        latitudeDelta: 50,
        longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapStyle}
        style={gStyle.map}  
        onLongPress={handleMapPress}
        >
          {ListOfMarkers.map((item) => {
            return (<Marker
              coordinate={item.coordinate}
              key={item.key}
              onPress={() => {
                downBoard()
                setMarker(item)
                setText(item.note)
              }}
              pinColor={'#060c2a'} />); 
          })}
        </MapView>
        <View style={gStyle.backView}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={gStyle.goBack}>
            <Text style={gStyle.boldText}>Go back</Text>
          </TouchableOpacity>  
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

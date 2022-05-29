import { React } from "react";
import {Image, View} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Map from '../components/Map';
import AddPerson from "../components/AddPerson";
import Main from "../components/Main"
import Login from "../components/Login"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarInactiveTintColor: 'white',
      tabBarActiveTintColor: '#559ce4',
      tabBarStyle: {
        height: '14%',
        paddingVertical: 10,
        fontSize:20,
        backgroundColor: '#174276',
        borderTopWidth: 0
      },
      tabBarLabelStyle: {
        fontSize: 18,
        fontFamily:'Nunito-Medium'
      }
    }}>
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarIcon: () => (<View style={{borderRadius:30, backgroundColor:'white', padding:15}}><Image source={require("./../assets/icons/placeholder.png")} style={{width: 25, height: 25}}/></View>)
          }}
      />
      <Tab.Screen 
        name="Contacts" 
        component={AddPerson}
        options={{
          tabBarIcon: () => (<View style={{borderRadius:30, backgroundColor:'white', padding:15}}><Image source={require("../assets/icons/group.png")} style={{width: 25, height: 25}}/></View>)
        }}
      />
    </Tab.Navigator>
  );
}


export default MainStackNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
    );
}


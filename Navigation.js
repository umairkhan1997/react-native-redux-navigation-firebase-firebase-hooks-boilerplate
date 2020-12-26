import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import Signin from './screens/signin';
import Signup from './screens/Signup';
import {Image, Platform
  } from 'react-native';
  import ContentView from './screens/ContentView'

//import IMGAES 
import homeImg from "./images/home.png"
import homegrayImg from './images/home-gray.png'
import userImg from "./images/user.png"
import usergrayImg from './images/user-gray.png'
import chatImg from "./images/chat.png"
import chatgrayImg from './images/chat-gray.png'




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function SignNav() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Signin" component={Signin} />
        </Stack.Navigator>
    );
  };


  export function BottomsTab() {
    return (
      <Tab.Navigator
      initialRouteName="Home"
     tabBarOptions={
{
  style: {
    backgroundColor: "blue",
    height:Platform.OS==='ios'?90: 50,
},
  labelStyle:{
    fontSize: 13,
    marginBottom:1,
    fontWeight:'bold'
  },
  activeTintColor: '#9e2012',
  showIcon: true,
}
     }
      style={{ backgroundColor: 'tomato' }}   
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? homeImg
                : homegrayImg
            } else if (route.name === 'About') {
              iconName = focused ? userImg : usergrayImg;
            }
            else if (route.name === 'Contact') {
             iconName = focused ? chatImg : chatgrayImg;
           }

            // You can return any component that you like here!
            return <Image style={{width:20,height:20,marginTop:5}} source={iconName} />;
          },
        })}    
  >
    
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="About" component={About} />
          <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
      
    );
  }

  function DrawerBar() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="ContentView">
          <Drawer.Screen name="ContentView" component={ContentView} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

  function MainNavi() {

    return (
         <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="SignNav" component={SignNav} />
          <Stack.Screen name="BottomsTab" component={BottomsTab}/> 
          <Stack.Screen name="DrawerBar" component={DrawerBar} /> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  };


  export default MainNavi;
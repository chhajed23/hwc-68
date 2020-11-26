import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FacebookScreen from './screens/fb';
import InstagramScreen from './screens/insta';

export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
  }
}
const tabNavigator=createBottomTabNavigator({
  FacebookScreen:{screen:FacebookScreen},
  InstagramScreen:{screen:InstagramScreen}
})

const AppContainer=createAppContainer(tabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

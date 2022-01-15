<<<<<<< HEAD
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Currency from '../screen/Currency';
import Favorite from '../screen/Favorite';



const Tabs = createMaterialTopTabNavigator(
  {
    Currency: {
      screen: Currency,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>Currency</Text>
=======
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Tabs = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Icon name="ios-home" color={tintColor} size={22} />
            <Text style={{color: tintColor}}>Home</Text>
>>>>>>> 3934aa623d835fb2d3986418173eed1d73327787
          </View>
        ),
      },
    },
<<<<<<< HEAD
    Favorite: {
      screen: Favorite,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>Favorite</Text>
=======
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Icon name="ios-person" color={tintColor} size={22} />
            <Text style={{color: tintColor}}>Profile</Text>
          </View>
        ),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Icon name="ios-settings" color={tintColor} size={22} />
            <Text style={{color: tintColor}}>Settings</Text>
>>>>>>> 3934aa623d835fb2d3986418173eed1d73327787
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    lazyLoad: true,
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        height: 70,
        backgroundColor: '#40404c',
        paddingBottom: 3,
        paddingTop: 3,
      },
      indicatorStyle: {
        backgroundColor: '#fff',
        elevation: 10,
      },
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
    },
  },
);

const MainScreenNavigator = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      title: 'My App',
      headerStyle: {
        backgroundColor: '#2b2b39',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
});

<<<<<<< HEAD

=======
export default createAppContainer(MainScreenNavigator);
>>>>>>> 3934aa623d835fb2d3986418173eed1d73327787

const styles = StyleSheet.create({
  iconCOntainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
<<<<<<< HEAD
});
export default createAppContainer(MainScreenNavigator);
=======
});
>>>>>>> 3934aa623d835fb2d3986418173eed1d73327787

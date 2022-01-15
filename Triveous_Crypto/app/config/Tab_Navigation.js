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
          </View>
        ),
      },
    },
    Favorite: {
      screen: Favorite,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>Favorite</Text>
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



const styles = StyleSheet.create({
  iconCOntainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
export default createAppContainer(MainScreenNavigator);
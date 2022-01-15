import React from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MainScreenNavigator from './app/config/Tab_Navigation';

function App() {
  return (
    <View style={styles.application}>
      <MainScreenNavigator />l
    </View>

  );
};



const styles = StyleSheet.create({
  application: {
    backgroundColor: "black",
    flex: 10,
  },
 });

export default App;
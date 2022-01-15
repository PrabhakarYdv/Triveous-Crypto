import React from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, View } from 'react-native';


function App() {
  return (
    <View style={styles.application}>
    <Text style={styles.title}>Prabhakar is Startted React App</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  application: {
    flex: 1,
    backgroundColor: "black",

  },
  title: {
    fontSize: 20,
    padding: 10,
    backgroundColor: "blue",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: "white",
  },

});

export default App;
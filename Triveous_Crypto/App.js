import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

function App() {
  return (
    <View style={styles.application}>
      <Text style={styles.title}>All Currency</Text>

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
    padding: 20,
    color: "white",
  },

});

export default App;
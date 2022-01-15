import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Favorite extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Favorite Page</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
export default Favorite;
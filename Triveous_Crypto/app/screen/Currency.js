import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class Currency extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Currency Page</Text>
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
export default Currency;
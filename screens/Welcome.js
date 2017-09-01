import React from 'react';
import { View, Text } from 'react-native';

class Welcome extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render () {
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>Welcome to the welcome screen!</Text>
      </ View>
    );
  }
}

export default Welcome;

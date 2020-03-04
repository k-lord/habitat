import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from '../assets/styles/Styles';

function LoginScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Enter your User name and password:</Text>
        {/* <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        /> */}
        <Button title="Sign In" onPress={() => navigation.navigate('Profile')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        {/* <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        /> */}
      </View>
    );
  };

  export default LoginScreen;
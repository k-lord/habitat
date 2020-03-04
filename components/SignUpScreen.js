import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from '../assets/styles/Styles';

function SignUpScreen({ navigation}) {
    return (
      <View style = {styles.container}>
        <Text>Sign In Screen</Text>
        <Text>Fill in info here...</Text>
        <Button title="Sign In" onPress={() => navigation.navigate('Profile')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        
      </View>
    )
  };

  export default SignUpScreen;
import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from '../assets/styles/Styles';
function HomeScreen({ navigation }) {

  return (
    <View style = {styles.container}>
      <Text>Home Screen</Text>
      <Text>Already have a profile?</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        
      />
      <Text>...or sign up to create one!</Text>
       <Button
        title="SignUp"
        onPress={() => navigation.navigate('SignUp')}
        
      />
    </View>
  );
}
export default HomeScreen;
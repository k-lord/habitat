import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../assets/styles/Styles';
import { Button } from 'react-native-paper';


function HomeScreen({ navigation }) {

  return (
    <View style = {styles.container}>
      <Text style={styles.header}>Home Screen</Text>
      <Text style={styles.text}>Already have a profile?</Text>
      <Button  
        style={styles.button}  
        color='#197bbd'    
        mode='contained'
        title="Login"
        onPress={() => navigation.navigate('Login')}        
      >Login</Button>
      <Text style={styles.text}>...or sign up to create one!</Text>
      <Button
        style={styles.button}
        color='#197bbd'
        mode='contained'
        title="SignUp"
        onPress={() => navigation.navigate('SignUp')}        
      >Sign up</Button>
    </View>
  );
}
export default HomeScreen;
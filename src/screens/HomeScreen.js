import * as React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import styles from '../assets/styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/BlogSubmit';
//import Icon from "react-native-vector-icons/FontAwesome";
import Textarea from 'react-native-textarea';

let axios = require("axios");

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#58DD7A', '#197BBD', '#00072D']}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <Text style={{color: 'white'}}>Enter your name </Text>
          <TextInput 
            placeholder={'user name'}
            placeholderTextColor={'#197BBD'}
            underlineColorAndroid={'transparent'}
            style={styles.textInput}>
          </TextInput>
          <Text style={{color: 'white'}}>Enter your Password </Text>
          <TextInput 
            placeholder={'password'}
            placeholderTextColor={'#197BBD'}
            underlineColorAndroid={'transparent'}
            style={styles.textInput}>
          </TextInput>
          <Button onClick={this.handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>
              Login
            </Text>
          </Button>
        </LinearGradient>
      </View>
    );
  }
}

export default HomeScreen;
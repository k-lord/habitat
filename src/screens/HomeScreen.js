import * as React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import styles from '../assets/styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/BlogSubmit';
//import Icon from "react-native-vector-icons/FontAwesome";
//import Textarea from 'react-native-textarea';
let axios = require("axios");

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
    console.log(this.state.text)
  }

  getStateText = () => this.state.text
  

  handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    axios.get('http://18.221.127.241:3001/user/5e7022a44e0bde55d7d0b8d2', {
    })
      .then(function (response) {
        console.log(response);
        // bring me to the next page
        // save the state of the user id to the app.js for the sake of getting id for all other calls
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#58DD7A', '#197BBD', '#00072D']}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <Text style={styles.header}>Habit@</Text>
          <Text style={{ color: 'white' }}>Enter your username </Text>
          <TextInput
            placeholder={'user name'}
            placeholderTextColor={'#197BBD'}
            underlineColorAndroid={'transparent'}
            style={styles.textInput}>
          </TextInput>
          <Text style={{ color: 'white' }}>Enter your Password </Text>
          <TextInput
            placeholder={'password'}
            placeholderTextColor={'#197BBD'}
            underlineColorAndroid={'transparent'}
            style={styles.textInput}>
          </TextInput>
          <Button onClick={this.handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>
              Log In
            </Text>
          </Button>
        </LinearGradient>
      </View>
    );
  }
}
export default HomeScreen;
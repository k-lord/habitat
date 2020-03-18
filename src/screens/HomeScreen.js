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
    this.state = { username: '', password: ''};
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
    console.log(this.state.text)
  }

  getUsernamePassword = () => {
    return ({username: this.state.username, password: this.state.password})
  }


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
          <Text style={styles.heading}>Habit@</Text>
          <TextInput style={styles.input}
            onChangeText={(username) => {
              console.log(this.state.username)
              return this.setState({ username })
            }}
            defaultValue={this.state.username}
            placeholder={'username'}
            placeholderTextColor={'#197BBD'}
            underlineColorAndroid={'transparent'}
            style={styles.textInput}>
          </TextInput>
          <TextInput style={styles.input}
            secureTextEntry={true}
            onChangeText={(password) => {
              console.log(this.state.password)
              return this.setState({ password })
            }}
            defaultValue={this.state.password}
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
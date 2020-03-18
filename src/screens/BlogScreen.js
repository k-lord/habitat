import * as React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../assets/styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/BlogSubmit';
//import Icon from "react-native-vector-icons/FontAwesome";
import Textarea from 'react-native-textarea';
let axios = require("axios");

class BlogScreen extends React.Component {

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
    axios.put('http://18.221.127.241:3001/user/5e7022a44e0bde55d7d0b8d2/newjournal', {
      feels: this.getStateText()
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container} >
        <LinearGradient
          colors={['#58DD7A', '#197BBD', '#00072D']}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <View style={styles.container}>
            <Text style={styles.heading}>Journal</Text>
            <Textarea
              containerStyle={styles.textareaContainer}
              style={styles.textarea}
              onChangeText={(text) => {
                console.log(this.state.text) 
                return this.setState({text})}}
              defaultValue={this.state.text}
              maxLength={140}
              placeholder={'Dear Journal...'}
              placeholderTextColor={'#197BBD'}
              underlineColorAndroid={'transparent'}
            />
            <Button onClick={this.handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>
                Publish
              </Text>
            </Button>
          </View>
         
        </LinearGradient>
      </View>
    );
  }
}
export default BlogScreen;
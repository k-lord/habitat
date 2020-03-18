
import * as React from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import SimpleLineChart from "./LineChart"
import Button from '../components/BlogSubmit';
import axios from 'axios';
import Textarea from 'react-native-textarea';

class ProfileScreen extends React.Component {
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
    axios.get('http://18.221.127.241:3001/user/5e7022a44e0bde55d7d0b8d2/', {
      feels: this.getStateText()
    
    })
      .then(function (response) {
        
        console.log(response.data.daily_journal);
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
          <Text style={styles.heading}> My Profile </Text>
          <SimpleLineChart></SimpleLineChart>
          <Button onClick={this.handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>
              Go To Blog
            </Text>
          </Button>
          <View>
            <Textarea>

            </Textarea>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default ProfileScreen;
import * as React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../assets/styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/BlogSubmit';
//import Icon from "react-native-vector-icons/FontAwesome";
import Textarea from 'react-native-textarea';

class BlogScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.text)
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
              value={this.state.text}
              maxLength={140}
              placeholder={'Dear Journal...'}
              placeholderTextColor={'#197BBD'}
              underlineColorAndroid={'transparent'}
            />
          </View>
          <Button style={styles.button}>Publish</Button>
        </LinearGradient>
      </View>
    );
  }
}
export default BlogScreen;
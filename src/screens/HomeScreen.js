// import Profile from './Profile';
import * as React from 'react'; 
import { Text, View, Button, Image } from 'react-native';
import styles from '../assets/styles/Styles';
import Textarea from 'react-native-textarea';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return(
      <View style={styles.container}>
        
          <Textarea
              containerStyle={styles.textareaContainer}
              style={styles.textarea}
              onChangeText={this.onChange}
              defaultValue={this.state.text}
              maxLength={120}
              placeholder={'好玩有趣的，大家同乐，伤感忧闷的，大家同哭。。。'}
              placeholderTextColor={'#c7c7c7'}
              underlineColorAndroid={'transparent'}
            />
            <Button>
              <Image source={require('../assets/images/flower2/flower2_sprite_13.png')} style={ { width: 200, height: 50 } } />
            </Button>
        
      </View>
    );
  }
}

export default HomeScreen;
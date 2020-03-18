import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../assets/styles/Styles';
import Slider from 'react-native-slider';
import { LinearGradient } from 'expo-linear-gradient';
import SubmitButton from '../components/DayLogSubmit'
let axios = require("axios");


const Frames = [
  require('../assets/images/theface/face_sprites_00.png'),
  require('../assets/images/theface/face_sprites_01.png'),
  require('../assets/images/theface/face_sprites_02.png'),
  require('../assets/images/theface/face_sprites_03.png'),
  require('../assets/images/theface/face_sprites_04.png'),
  require('../assets/images/theface/face_sprites_05.png'),
  require('../assets/images/theface/face_sprites_06.png'),
  require('../assets/images/theface/face_sprites_07.png'),
  require('../assets/images/theface/face_sprites_08.png'),
  require('../assets/images/theface/face_sprites_09.png'),
];

class DayLogScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      value5: 0
    };
  }
  getImageSrc = value => {
    console.log(value);
    let index = Math.floor(value / 11);
    console.log(Frames[index]);
    return Frames[index];
  };

  change1(value) {
    this.setState(() => {
      return {
        value1: parseFloat(value)
      };
    });
  }
  change2(value) {
    this.setState(() => {
      return {
        value2: parseFloat(value),
      };
    });
  }
  change3(value) {
    this.setState(() => {
      return {
        value3: parseFloat(value),
      };
    });
  }
  change4(value) {
    this.setState(() => {
      return {
        value4: parseFloat(value),
      };
    });
  }
  change5(value) {
    this.setState(() => {
      return {
        value5: parseFloat(value),
      };
    });
  }

  getStateValues = () => {
    return ({
      self_average: this.state.value1,
      help_yourself: this.state.value2,
      work_school_mood: this.state.value3,
      life_mood: this.state.value4,
      world_mood: this.state.value5
    })
  }

  handleSubmit = event => {
    console.log(event);
    console.log(this.getStateValues())
    event.preventDefault();
    axios.put('http://18.221.127.241:3001/user/5e7022a44e0bde55d7d0b8d2/newdailycalc', {
      daily_calc: this.getStateValues()
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { value1, value2, value3, value4, value5 } = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#58DD7A', '#197BBD', '#00072D']}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <Text style={styles.text}>How was your day?</Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={this.getImageSrc(value1)} />
          <Slider
            style={styles.slider}
            step={1}
            maximumValue={100}
            onValueChange={this.change1.bind(this)}
            value={value1} />
          <Text style={styles.text}>Did you do something today that brought you joy?</Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={this.getImageSrc(value2)} />
          <Slider
            style={styles.slider}
            step={100}
            maximumValue={100}
            onValueChange={this.change2.bind(this)}
            value={value2} />
          <Text style={styles.text}>How was work/school?</Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={this.getImageSrc(value3)} />
          <Slider
            style={styles.slider}
            step={1}
            maximumValue={100}
            onValueChange={this.change3.bind(this)}
            value={value3} />
          <Text style={styles.text}>How was life outside of work/school?</Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={this.getImageSrc(value4)} />
          <Slider
            style={styles.slider}
            step={1}
            maximumValue={100}
            onValueChange={this.change4.bind(this)}
            value={value4} />
          <Text style={styles.text}>How do you feel about you world you live in today?</Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={this.getImageSrc(value5)} />
          <Slider
            style={styles.slider}
            step={1}
            maximumValue={100}
            onValueChange={this.change5.bind(this)}
            value={value5} />
          <SubmitButton onClick={this.handleSubmit} style={styles.button}>Publish</SubmitButton>
          {/* <Button
            style={styles.button}
            color='#197bbd'
            mode='contained'
            title="Go back"
            onPress={() => this.props.navigation.navigate('Indoors')}
          >Go to Room</Button>
          <Button
            style={styles.button}
            color='#197bbd'
            mode='contained'
            title="Go back"
            onPress={() => this.props.navigation.navigate('Journal')}
          >Go to Journal</Button>
          <Button
            style={styles.button}
            color='#197bbd'
            mode='contained'
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          >Go Back</Button> */}
        </LinearGradient>
      </View>
    );
  }
}

export default DayLogScreen;
import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../assets/styles/Styles';
import Slider from 'react-native-slider';
import { LinearGradient } from 'expo-linear-gradient';


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
      value3: 0
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

  render() {
    const { value1, value2, value3 } = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#58DD7A', '#197BBD', '#00072D']}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <Text style={styles.text}>How was work?</Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={this.getImageSrc(value1)} />
          <Slider
            style={styles.slider}
            step={1}
            maximumValue={100}
            onValueChange={this.change1.bind(this)}
            value={value1} />
          <Text style={styles.text}>How was school?</Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={this.getImageSrc(value2)} />
          <Slider
            style={styles.slider}
            step={1}
            maximumValue={100}
            onValueChange={this.change2.bind(this)}
            value={value2} />
          <Text style={styles.text}>How was your breakfast?</Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={this.getImageSrc(value3)} />
          <Slider
            style={styles.slider}
            step={1}
            maximumValue={100}
            onValueChange={this.change3.bind(this)}
            value={value3}/>
          <Button
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
          >Go Back</Button>
        </LinearGradient>
      </View>
    );
  }
}

export default DayLogScreen;
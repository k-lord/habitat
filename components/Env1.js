import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from '../assets/styles/Styles';
import { Button } from 'react-native-paper';
import Slider from 'react-native-slider';

const Frames1 = [
    require('../assets/images/flower1/flower1_sprite_00.png'),
    require('../assets/images/flower1/flower1_sprite_01.png'),
    require('../assets/images/flower1/flower1_sprite_02.png'),
    require('../assets/images/flower1/flower1_sprite_03.png'),
    require('../assets/images/flower1/flower1_sprite_04.png'),
    require('../assets/images/flower1/flower1_sprite_05.png'),
    require('../assets/images/flower1/flower1_sprite_06.png'),
    require('../assets/images/flower1/flower1_sprite_07.png'),
    require('../assets/images/flower1/flower1_sprite_08.png'),
    require('../assets/images/flower1/flower1_sprite_09.png'),
    require('../assets/images/flower1/flower1_sprite_10.png'),
    

];

const Frames2 = [
    require('../assets/images/flower2/flower2_sprite_00.png'),
    require('../assets/images/flower2/flower2_sprite_01.png'),
    require('../assets/images/flower2/flower2_sprite_02.png'),
    require('../assets/images/flower2/flower2_sprite_03.png'),
    require('../assets/images/flower2/flower2_sprite_04.png'),
    require('../assets/images/flower2/flower2_sprite_05.png'),
    require('../assets/images/flower2/flower2_sprite_06.png'),
    require('../assets/images/flower2/flower2_sprite_07.png'),
    require('../assets/images/flower2/flower2_sprite_08.png'),
    require('../assets/images/flower2/flower2_sprite_09.png'),
    require('../assets/images/flower2/flower2_sprite_10.png'),
    require('../assets/images/flower2/flower2_sprite_11.png'),
    require('../assets/images/flower2/flower2_sprite_12.png'),
    require('../assets/images/flower2/flower2_sprite_13.png'),
];

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value1: 0,
        value2: 0,
      };
    }
    getImageSrc1 = value => {
     console.log(value);
     let index = Math.floor(value/12);
     console.log(Frames1[index]);
     return Frames1[index];
    };

    getImageSrc2 = value => {
        console.log(value);
        let index = Math.floor(value/11);
        console.log(Frames2[index]);
        return Frames2[index];
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
            value2: parseFloat(value)
          };
        });
      }
    render() {
      const {value1, value2} = this.state;
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Here's a flower!</Text>
          <Image  
            style={{width: 60, height: 60}} 
            source={this.getImageSrc1(value1)} />          
          <Slider
            style={styles.slider}
            step={100}
            maximumValue={100}
            onValueChange={this.change1.bind(this)}
            value={value1}
          />
          <Text style={styles.text}>Here's a different flower!</Text>
          <Image 
            style={{width: 60, height: 60}} 
            source={this.getImageSrc2(value2)} />          
          <Slider
            style={styles.slider}
            step={1}
            maximumValue={150}
            onValueChange={this.change2.bind(this)}
            value={value2}
          />
          
        <Button 
            style={styles.button}
            color='#197bbd'    
            mode='contained'
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
            >Go Back</Button>
        </View>
      );
    }
  }
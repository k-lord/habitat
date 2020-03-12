import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from '../assets/styles/Styles';
import { Button } from 'react-native-paper';
import Slider from 'react-native-slider';
import {Frames} from '../assets/animation';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value1: 0,
        value2: 0,
        value3: 0,
        imageSrc: []
      };
    }
  
    change1(value, img) {
      this.setState(() => {
        return {
          value1: parseFloat(value),
          imageSrc: [],
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
      const {value1, value2, value3} = this.state;
      return (
        <View style={styles.container}>
          <Text style={styles.text}>How was work?</Text>
          
          <Image 
            style={{width: 30, height: 30}} 
            source={require('../assets/images/Smile.gif')} />
          {/* <Text style={styles.text}>{String(value1)}</Text> */}
          <Slider
            style={styles.slider}
            step={10}
            maximumValue={100}
            onValueChange={this.change1.bind(this)}
            value={value1}
          />
          <Text style={styles.text}>How was school?</Text>
          <Image 
            style={{width: 30, height: 30}} 
            source={require('../assets/images/Smile.gif')} />
          <Text style={styles.text}>{String(value2)}</Text>
          <Slider
            style={styles.slider}
            step={1}
            maximumValue={100}
            onValueChange={this.change2.bind(this)}
            value={value2}
          />
          <Text style={styles.text}>How was your breakfast?</Text>
          <Image 
            style={{width: 30, height: 30}} 
            source={require('../assets/images/Smile.gif')} />
          <Text style={styles.text}>{String(value3)}</Text>
          <Slider
            style={styles.slider}
            step={1}
            maximumValue={100}
            onValueChange={this.change3.bind(this)}
            value={value3}
          />
          <Button 
            color='#197bbd'    
            mode='contained'
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
            >Go Back</Button>
        </View>
      );
    }
  }
  
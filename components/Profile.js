import React from 'react';
import { View, Text, Slider} from 'react-native';
import styles from '../assets/styles/Styles';
import { Button } from 'react-native-paper';

function ProfileScreen({ navigation }) {
 
  return (
    <View style = {styles.container}>
      <Text
      style={styles.text}>Welcome...user...!</Text>
      <Text
      style={styles.text}>Wanna Log your day?</Text>

      <Button    
        color='#197bbd'    
        mode='contained'
        title="DayLog"
        onPress={() => navigation.navigate('DayLog')}        
      >Log Day</Button>

      <Text style={styles.text}>or click here to go back...</Text>
      
      <Button 
       color='#197bbd'    
       mode='contained'
       title="Go back"
       onPress={() => navigation.goBack()}
       >Go Back</Button>
      {/* <Slider  step={1}
          maximumValue={100}
          onValueChange={this.change.bind(this)}
          value={value}/> */}
    </View>
  )
};
export default ProfileScreen;

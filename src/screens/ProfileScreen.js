
import * as React from 'react'; 
import { Text, View } from 'react-native';
import styles from '../assets/styles/Styles';

class ProfileScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text> This is my Profile screen </Text>
      </View>
    );
  }
}

export default ProfileScreen;
// import Profile from './Profile';
import * as React from 'react'; 
import { Text, View } from 'react-native';
import styles from '../assets/styles/Styles';

class HomeScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text> This is my Home screen </Text>
      </View>
    );
  }
}

export default HomeScreen;
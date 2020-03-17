// import Profile from './Profile';
import * as React from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#58DD7A', '#197BBD', '#00072D']}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <Text style={{color: 'white'}}> This is my Home screen </Text>
        </LinearGradient>
      </View>
    );
  }
}

export default HomeScreen;
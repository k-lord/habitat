import * as React from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';

class BlogScreen extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <LinearGradient
          colors={['#58DD7A', '#197BBD', '#00072D']}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
              margin: 0
            }}>
            Sign in with Facebook
          </Text>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
            Sign in with Google
          </Text>

        </LinearGradient>
      </View>
    );
  }
}

export default BlogScreen;
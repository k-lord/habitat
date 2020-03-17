import * as React from 'react'; 
import { Text, View } from 'react-native';
import styles from '../assets/styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';

class BlogScreen extends React.Component {
    render() {
      return(
        <View style={styles.container} >
           <LinearGradient
          colors={['red', 'orange', 'yellow']}
          style={{ padding: 75, alignItems: 'center', borderRadius: 5 }}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
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
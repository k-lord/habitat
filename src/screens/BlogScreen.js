import * as React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../assets/styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/BlogSubmit';
import Icon from "react-native-vector-icons/FontAwesome";

class BlogScreen extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <LinearGradient
          colors={['#58DD7A', '#197BBD', '#00072D']}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
         
          <Button onPress={ () => this.onSubmit(this.state.searchText) }>
             <Icon name="search" size = {20} color = "#4285F4" />
          </Button>
          {/*  */}

        </LinearGradient>
      </View>
    );
  }
}

export default BlogScreen;
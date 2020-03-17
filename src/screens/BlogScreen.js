import * as React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';

class BlogScreen extends React.Component {
    render() {
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>
          <Text> This is my Blog screen </Text>
        </View>
      );
    }
  }

  export default BlogScreen;
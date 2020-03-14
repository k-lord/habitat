import * as React from 'react';
import { View, Text, Image} from 'react-native';
import styles from '../assets/styles/Styles';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

export default class MyComponent extends React.Component {
  state = {
    text: ''
  };

  render(){
    return (
       <View style={styles.container}>
            <TextInput
                label='Write here'
                multiline='true'
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
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
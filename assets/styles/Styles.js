import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default StyleSheet.create({

    container: {
      flex: 1,    
      backgroundColor: '#00072d',    
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 16,
      color: '#58dd7a',
      margin:10,
      
    },

    header: {
      color: 'white',
      
      marginTop: 15,
    },

    textContainer: {
      flex: 1,
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },

    textInput: {
      width: '100%',
      height: 42,
      borderColor: '#009688',
      borderWidth: 1,
      backgroundColor: '#fff',
      textAlign:'center',
      marginBottom: 10,
    },

    slider: {
      color: 'green',
      width: 200,
      height: 45,      
      alignItems: 'stretch',
    },

    button: {
      margin:10,
      
    }
});

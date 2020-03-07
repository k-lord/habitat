import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default StyleSheet.create({

    container: {
        flex: 1,    
        backgroundColor: 'lightgray',    
        alignItems: 'center',
        justifyContent: 'center',
      },
    text: {
      fontSize: 30,
      color: 'yellow',
      
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
      textAlign:'center'
    }
});

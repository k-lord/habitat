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
// background: rgb(48,224,191);
//             background: linear-gradient(150deg, rgba(15,135,113,1) 0%, rgba(13,7,107,1) 40%, rgba(71,7,107,1) 100%) no-repeat center center fixed;
//             -webkit-background-size: cover;
//             -moz-background-size: cover;
//             -o-background-size: cover;
//             background-size: cover;
//             color: white;
//             font-family: Arial, Helvetica, sans-serif;
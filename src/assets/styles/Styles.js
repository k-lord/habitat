import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
export default StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    margin: 10,
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
    
    height: 30,
    borderColor: '#009688',
    borderWidth: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  slider: {
    color: '#ffffff',
    width: 200,
    height: 45,
    alignItems: 'stretch',
  },
  button: {
    margin: 10,
    color: "#ffffff",
    backgroundColor:"#228B22",
    padding:10,
    borderRadius: 15
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#FFF',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
  heading: {
    color: '#FFF',
    fontSize: 40,
    padding: 40
  }
});
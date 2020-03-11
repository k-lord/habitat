

import  React, {Component} from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  styles from './assets/styles/Styles';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/Profile';
import SignUpScreen from './components/SignUpScreen';
import LoginScreen from './components/LoginScreen';
import DayLogScreen from './components/DayLogScreen';

//You don't need to create activity in android folder. all pages and views are js files inside index.js and you can switch between them by packages like React Navigation. For creating an splash, you can make a splashScreen.js file and call it from index.js. In splashScreen.js you can set a timer and after that time, your first page of app (Home for example) calls. This is a sample code for splashScreen.js:

// class SplashScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { navigation : props.navigation
//         }
//     }

//     componentDidMount() {
//         setTimeout(() => {
//           this.state.navigation.navigate('Home')
//         }, 8000)
//     }

//     render() {
//         return (
//             <View style= {styles.container} >
//                 <View >
                    
//                     <Image
//                       style={{width: 100, height: 100}}
//                       source={require("./assets/images/habitatLogo2.gif")}
//                     />
//                 </View>
//             </View>
//         )
//     }
// }
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
         screenOptions={{
          headerShown: false
        }}> 
        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="DayLog" component={DayLogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome to HABIT@</Text>

//     </View>
//   );
// }
//==================================================================================
// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   StatusBar
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar
//           barStyle="light-content"
//           backgroundColor="#4F6D7A"
//         />
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#4F6D7A',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: '#F5FCFF',
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#F5FCFF',
//     marginBottom: 5,
//   },
// });
//==================================================================================

//In App.js in a new project

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//You don't need to create activity in android folder. all pages and views are js files inside index.js and you can switch between them by packages like React Navigation. For creating an splash, you can make a splashScreen.js file and call it from index.js. In splashScreen.js you can set a timer and after that time, your first page of app (Home for example) calls. This is a sample code for splashScreen.js:

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { navigation : props.navigation
        }
    }

    componentDidMount() {
        setTimeout(() => {
          this.state.navigation.navigate('Home')
        }, 2500)
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ flex: 1, paddingTop: 50 }}>
                    <Text>Splash Screen</Text>
                </View>
            </View>
        )
    }
}
function HomeScreen({ navigation }) {
  // componentDidMount() {
  //   console.log("hello")
  //   // setTimeout( 
  //   //   () => {navigation.navigate('DetailsScreen')}, 3000);
  // };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        
      />
    </View>
  );
}
//componentDidMount(setTimeout({} => {navigation.navigate('DetailsScreen')}), 3000)
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
//==================================================================================
// import 'react-native-gesture-handler';
// import React, { Component } from 'react';
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import HomeScreen from './components/HomeScreen';
// import Profile from './components/Profile';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }


// const Stack = createStackNavigator();

// // export default class NavigationPages extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {text: ''};
// //   }

  
// function App() {
  
//     return (
//       <NavigationContainer>
//          <Stack.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{title: 'Welcome'}}
//         />
//           <View style={styles.container}>
//             <TextInput
//               style={{height: 40}}
//               placeholder="Type here to translate!123"
//               onChangeText={(text) => this.setState({text})}
//               value={this.state.text}
//             />
//             <Text style={{padding: 10, fontSize: 42}}>
//               {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//             </Text>
//             <Button
//               onPress={() => {
//               alert('You tapped the button!');
//               }}
//               title="Press Me"
//             />
//           </View>
          
//           <Stack.Screen name="Profile" component={Profile} />
//       </NavigationContainer>     
//     );

  
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
    
//     backgroundColor: 'lightgray',
    
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 30,
//     color: 'yellow',
    
//   }
// });
//==================================================================================
// import 'react-native-gesture-handler';
// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{title: 'Welcome'}}
//         />
//         <Stack.Screen name="Profile" component={Profile} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



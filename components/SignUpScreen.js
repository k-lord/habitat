import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import styles from '../assets/styles/Styles';
import { Button } from 'react-native-paper';

function SignUpScreen({ navigation}) {
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>Sign In Screen</Text>
        <Text style={styles.text}>Fill in info here...</Text>
        <View style = {StyleSheet.textContainer}>
            <Text style={styles.text}>What's your name?</Text>
                <TextInput
                    placeholder='User name'
                    style={styles.textInput}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    />
            <Text style={styles.text}>Choose a password!</Text>
                <TextInput
                    placeholder='Password'
                    style={styles.textInput}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    />
            <Text style={styles.text}>Re-enter chosen password!</Text>
                <TextInput
                    placeholder='Password'
                    style={styles.textInput}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    />
            </View>
        <Button 
          style={styles.button}
          color='#197bbd'
          mode='contained' 
          title="Sign In" 
          onPress={() => navigation.navigate('Profile')} 
          >Sign In</Button>
        <Button 
          style={styles.button} 
          color='#197bbd'
          mode='contained'
          title="Go back" 
          onPress={() => navigation.goBack()} 
          >Go Back</Button>       
      </View>
    )
  };

  export default SignUpScreen;
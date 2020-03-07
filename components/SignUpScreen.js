import React from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import styles from '../assets/styles/Styles';

function SignUpScreen({ navigation}) {
    return (
      <View style = {styles.container}>
        <Text>Sign In Screen</Text>
        <Text>Fill in info here...</Text>
        <View style = {StyleSheet.textContainer}>
            <Text>What's your name?</Text>
                <TextInput
                    placeholder='User name'
                    style={styles.textInput}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    />
            <Text>Choose a password!</Text>
                <TextInput
                    placeholder='Password'
                    style={styles.textInput}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    />
            <Text>Re-enter chosen password!</Text>
                <TextInput
                    placeholder='Password'
                    style={styles.textInput}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    />
            </View>
        <Button title="Sign In" onPress={() => navigation.navigate('Profile')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        
      </View>
    )
  };

  export default SignUpScreen;
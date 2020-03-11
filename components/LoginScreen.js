import React, {useState} from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import styles from '../assets/styles/Styles';


    

function LoginScreen({ navigation }) {
    // const [value, onChangeText] = useState('Name');
        return (
        <View style={styles.container}>
            <Text>Enter your User name and password:</Text>
            <View style = {StyleSheet.textContainer}>
                <TextInput
                    
                    placeholder='User name'
                    style={styles.textInput}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    />
                <TextInput
                    placeholder='Password'
                    style={styles.textInput}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    />
            </View>
            <Button title="Sign In" mode='contained' onPress={() => navigation.navigate('Profile')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            {/* <Button
            title="Go back to first screen in stack"
            onPress={() => navigation.popToTop()}
            /> */}
        </View>
        );
};
    

  export default LoginScreen;
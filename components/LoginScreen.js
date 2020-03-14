import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import styles from '../assets/styles/Styles';
import { Button } from 'react-native-paper';

    

function LoginScreen({ navigation }) {
    // const [value, onChangeText] = useState('Name');
        return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter your User name and password:</Text>
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
            <Button 
                style={styles.button}
                color='#197bbd' 
                title="Sign In" 
                mode='contained' 
                onPress={() => navigation.navigate('Profile')}
            >Sign In</Button>
            <Button 
                style={styles.button} 
                color='#197bbd'
                title="Go back" 
                mode='contained' 
                onPress={() => navigation.goBack()}
            >Go Back</Button>
        </View>
        );
};
    

  export default LoginScreen;
import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from '../assets/styles/Styles';
function ProfileScreen({ navigation }) {
  return (
    <View style = {styles.container}>
      <Text>Welcome...user...!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
};
export default ProfileScreen;

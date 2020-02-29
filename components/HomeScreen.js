// import Profile from './Profile';

export default function HomeScreen({navigation}) {
    return (
      <Button
        title="Go to User's profile"
        onPress={() => navigation.navigate('Profile', {name: 'User'})}
      />
    );
  }
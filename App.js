import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { spacing } from './src/theme/spacing';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor = "#00BCD4"/>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <WelcomeScreen /> */}
      <SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: spacing[17],
  },
});

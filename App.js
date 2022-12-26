// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/screens/RootNavigation';
// import SignInScreen from './src/screens/LoginScreen';
// import WelcomeScreen from './src/screens/WelcomeScreen';
import { spacing } from './src/theme/spacing';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar backgroundColor = "#00BCD4"/>
    //   {/* <Text>Open up App.js to start working on your app!</Text> */}
    //   {/* <WelcomeScreen /> */}
    //   <SignInScreen />
    // </View>
    <>
      <RootNavigation />
    </>
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

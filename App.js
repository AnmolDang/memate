import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import SplashScreen from './src/screens/Splash';
import SignIn from './src/screens/SignIn';
import SignInWithEmail from './src/screens/SignIn/SignInWithEmail';
import OtpScreen from './src/screens/Otp';
import Tabs from './src/navigations/tabs';
import ChooseOrganization from './src/screens/ChooseOrganization';
import BottomBar from './src/screens/BottomBar';
import TaskComponent from './src/components/TaskComponent';
import Menu from './src/screens/Menu';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignInWithEmail" component={SignInWithEmail} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen
          name="ChooseOrganization"
          component={ChooseOrganization}
        />
        <Stack.Screen name="BottomBar" component={BottomBar} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};
export default App;

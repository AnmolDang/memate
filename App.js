import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from './src/screens/Splash';
import SignIn from './src/screens/SignIn';
import SignInWithEmail from './src/screens/SignIn/SignInWithEmail';
import OtpScreen from './src/screens/Otp';
import ChooseOrganization from './src/screens/ChooseOrganization';
import BottomBar from './src/screens/BottomBar';
import Menu from './src/screens/Menu';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import HomeScreen from './src/screens/BottomBar/Home';
import Profile from './src/screens/Profile/Index';
import EditProfile from './src/screens/Profile/EditProfile';
import DeleteAccount from './src/screens/DeleteAccount/DeleteAccount';
import Setting from './src/screens/Settng/Setting';
import Unavailability from './src/screens/Unavailability/Unavailability';
import NewDateAdd from './src/screens/NewDateAdd/NewDateAdd';
import Chat from './src/screens/Chat/Chat';
import BellaMeillenia from './src/screens/BellaMeillenia/BellaMeillenia';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
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
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="Unavailability" component={Unavailability} />
          <Stack.Screen name="NewDateAdd" component={NewDateAdd} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="BellaMeillenia" component={BellaMeillenia} />
        </Stack.Navigator>
        {/* <Tabs /> */}
      </NavigationContainer>
    </Provider>
  );
};
export default App;

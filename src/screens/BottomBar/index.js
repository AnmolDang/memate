import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { appColors } from '../../utils/appColors';
import { briefcase, briefcaseFill, chat, chatFill, checklist, checklistFill, Home, HomeFill, plus } from '../../utils/Images';
import HomeScreen from './Home';
import JobsScreen from './Jobs';
import TasksScreen from './Tasks';
import ChatScreen from './Chat';
import AddScreen from './Add';
import Chat from '../Chat/Chat';



const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -10,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View style={{
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: appColors.black,
    }}>
      {children}
    </View>
  </TouchableOpacity>
);






const BottomBar = ({ navigation }) => {
  return (
    <Tab.Navigator

      screenOptions={({ route, }) => ({
        headerShown: false,
        initialRouteName: 'BottomBar',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            return iconName = focused ? <Image source={HomeFill} style={{ width: size, height: size }} /> : <Image source={Home} style={{ width: size, height: size }} />;
          } else if (route.name === 'Work') {
            return iconName = focused ? <Image source={briefcaseFill} style={{ width: size, height: size }} /> : <Image source={briefcase} style={{ width: size, height: size }} />;
          } else if (route.name === 'Tasks') {
            return iconName = focused ? <Image source={checklistFill} style={{ width: size, height: size }} /> : <Image source={checklist} style={{ width: size, height: size }} />;
          } else if (route.name === 'Messages') {
            return iconName = focused ? <Image source={chatFill} style={{ width: size, height: size }} /> : <Image source={chat} style={{ width: size, height: size }} />;
          }
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 80,
          ...styles.shadow,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Work" component={JobsScreen} />
      <Tab.Screen
        name="Plus"
        component={AddScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Image source={plus} style={{ width: size, height: size }} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          ),
        }}
      />
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Messages" component={Chat} />
    </Tab.Navigator>
  )
};

export default BottomBar;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: appColors.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/BottomBar/Home';
import JobsIcon from '../assets/svg/JobsIcon';
import JobsScreen from '../screens/BottomBar/Jobs';
import TasksScreen from '../screens/BottomBar/Tasks';
import ChatScreen from '../screens/BottomBar/Chat';
import {appColors} from '../utils/appColors';
import HomeIcon from '../assets/svg/HomeIcon';
import TasksIcon from '../assets/svg/TasksIcon';
import ChatIcon from '../assets/svg/ChatIcon';
import AddScreen from '../screens/BottomBar/Add';
import PlusIcon from '../assets/svg/PlusIcon';
import InactiveHome from '../assets/svg/InactiveHome';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',

          elevation: 0,
          backgroundColor: appColors.white,

          height: 90,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <InactiveHome stroke={focused ? appColors.black : appColors.grey} />
          ),
        }}
      />
      <Tab.Screen
        name="JobsScreen"
        component={JobsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <JobsIcon stroke={focused ? appColors.black : appColors.grey} />
          ),
        }}
      />
      <Tab.Screen
        name="AddScreen"
        component={AddScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{marginTop: 20}}>
              <PlusIcon />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TasksScreen"
        component={TasksScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TasksIcon stroke={focused ? appColors.black : appColors.grey} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ChatIcon stroke={focused ? appColors.black : appColors.grey} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});

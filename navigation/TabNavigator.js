import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";
import {RFValue} from 'react-native-responsive-fontsize';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();
const BottomTabNavigator =()=>{

  return (

      <Tab.Navigator
      labeled = {false}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'CreatePost') {
              iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor:'pink',
          inactiveTintColor:'lightblue'
        }}>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatePost" component={CreateStory} />
      </Tab.Navigator>
  );
}

export default BottomTabNavigator 
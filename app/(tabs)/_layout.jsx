// Code:
import React from 'react'
import{Tabs} from 'expo-router'
import { Feather } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen name="home"
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => 
        <Feather name="home" 
        size={24} color={color} />
        
      }}/>
      <Tabs.Screen name="explore"
      options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({color}) => 
          <Feather name="search" 
          size={24} color={color} />
        
      }} />
      <Tabs.Screen name="profile" 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color}) => 
          <Feather name="user" 
          size={24} color={color} />
        
      }}/>
    </Tabs>
  )
}
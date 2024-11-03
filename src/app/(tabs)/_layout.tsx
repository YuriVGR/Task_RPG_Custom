import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="rpg"
        options={{
          title: 'RPG',
    
        }}
      />
           <Tabs.Screen
        name="task"
        options={{
          title: 'TASKS'
        }}
      />
           <Tabs.Screen
        name="settings"
        options={{
          title: 'Configurações',
        }}
      />
    </Tabs>
  );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/navigation/types';
import { Home } from './src/screens/Home/Home';
import { Page } from './src/screens/page/Page';
// import { MyTabs } from './src/routes/MyTabs';

const Stack = createStackNavigator<RootStackParamList>();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown: false}}  name='Home' component={Home}/>
        <Stack.Screen options={{headerShown: false}} name='Page' component={Page}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
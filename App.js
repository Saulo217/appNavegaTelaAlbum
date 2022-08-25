import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Home } from './src/pages/Home';
import { Album } from './src/pages/Album';
import { Sobre } from './src/pages/Sobre';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{ title: 'Tourist App', headerTitleAlign: 'center' }}></Stack.Screen>
        <Stack.Screen name='Sobre' component={Sobre} options={{ title: 'Sobre', headerTitleAlign: 'center' }}></Stack.Screen>
        <Stack.Screen name='Album' component={Album} options={{ title: 'Pontos Turisticos', headerTitleAlign: 'center' }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

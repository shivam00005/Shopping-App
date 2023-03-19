import React from 'react'
import { View, Text } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import MyCart from './components/screens/MyCart';
import ProductInfo from './components/screens/ProductInfo';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (

    <View>
      <Text>React Native App</Text>
    </View>

  )
}


export default App;

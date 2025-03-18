import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Layout from './src/layouts/Layouts';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NeswScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <Layout>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="News" component={NewsScreen} />
          </Stack.Navigator>
        </Layout>
      </NavigationContainer>
    </>
  );
};

export default App;

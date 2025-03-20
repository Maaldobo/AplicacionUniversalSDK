import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Layout from './src/layouts/Layouts';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NeswScreen';
import CarouselScreen from './src/screens/CarouselScreen';
import SubscriptionScreen from './src/screens/SuscriptionScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <Layout>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="News" component={NewsScreen} />
            <Stack.Screen name="Carrousel" component={CarouselScreen} />
            <Stack.Screen name="Suscripcion" component={SubscriptionScreen} />
          </Stack.Navigator>
        </Layout>
      </NavigationContainer>
    </>
  );
};

export default App;

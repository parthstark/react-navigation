import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import InfoScreen from '../screens/InfoScreen';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={DrawerNavigation} options={{ headerShown: false }} />
                <Stack.Screen name='InfoScreen' component={InfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
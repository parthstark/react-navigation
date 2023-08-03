import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomTab1 from '../screens/BottomTabs/BottomTab1';
import BottomTab2 from '../screens/BottomTabs/BottomTab2';
import BottomTab3 from '../screens/BottomTabs/BottomTab3';

const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name='BottomTab1' component={BottomTab1} options={{ headerShown: false }} />
            <BottomTab.Screen name='BottomTab2' component={BottomTab2} options={{ headerShown: false }} />
            <BottomTab.Screen name='BottomTab3' component={BottomTab3} options={{ headerShown: false }} />
        </BottomTab.Navigator>
    )
}

export default BottomNavigation
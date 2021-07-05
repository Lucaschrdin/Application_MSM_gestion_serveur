import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import appBottomTabNavigator from './appBottomTabNavigator';
import authenticationNavigator from './authenticationNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import Live from '../screens/live';

const Stack = createStackNavigator();

export default function AppNavigator({ route, navigation }) {

    const [isSignedIn, setIsSignedIn] = useState(false)
    
    

    return(
        <NavigationContainer>
            <Stack.Navigator
                headerMode='none'
                >
                {isSignedIn === true
                    ? <Stack.Screen name='appBottomTabNavigator' component={appBottomTabNavigator} />
                
                    : <Stack.Screen name='authenticationNavigator' component={authenticationNavigator} initialParams={{onClick: setIsSignedIn}}
                    />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
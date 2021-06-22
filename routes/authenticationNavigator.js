import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/signUp';
import LogIn from '../screens/logIn';

const Stack = createStackNavigator();

export default function AuthenticationNavigator({ route, navigation }) {

    const { onClick } = route.params

    return(
        <Stack.Navigator 
            initialRouteName="Log In"
            headerMode='none'
        >
        <Stack.Screen 
            name="Sign Up" 
            component={SignUp}
            initialParams={{onClick: onClick}}
            />
        <Stack.Screen 
            name="Log In" 
            component={LogIn}
            initialParams={{onClick: onClick}}
            />
        </Stack.Navigator>
    )
}

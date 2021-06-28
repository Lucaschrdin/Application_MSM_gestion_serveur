import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/signUp';
import LogIn from '../screens/logIn';
import login_scientists from '../screens/login_scientist';
import Connection from '../screens/connection';

const Stack = createStackNavigator();

export default function AuthenticationNavigator({ route, navigation }) {

    const { onClick } = route.params

    return(
        <Stack.Navigator 
            initialRouteName="Connection"
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
        <Stack.Screen
            name="Connection"
            component={Connection}
            initialParams={{onClick: onClick}}
        />
        <Stack.Screen
            name="Log In Scientists"
            component={login_scientists}
            initialParams={{onClick: onClick}}
        />
        
        </Stack.Navigator>
    )
}

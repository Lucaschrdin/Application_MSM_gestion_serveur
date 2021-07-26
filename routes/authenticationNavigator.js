import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import login_scientists from '../screens/loginPrivate';
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

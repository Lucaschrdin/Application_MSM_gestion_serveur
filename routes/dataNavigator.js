import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Data2 from '../screens/data2';
import ViewDataDetails from '../screens/viewDataDetails';

const Stack = createStackNavigator();

export const DataNavigator = ({ navigation }) => {

  return(
    <Stack.Navigator 
        initialRouteName="Data"
    >
      <Stack.Screen 
        name="Data" 
        component={Data2}
        options={{
            headerShown: false
        }}/>
      <Stack.Screen 
        name="View Data details" 
        component={ViewDataDetails}
        options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: '#0070FF',
                fontFamily: 'sansation-bold'
            },
            headerTransparent: false
        }}/>
    </Stack.Navigator>
  );
}
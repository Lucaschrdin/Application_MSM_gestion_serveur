import 'react-native-gesture-handler';
import React, {useState} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './routes/appNavigator';
import appContext from './components/appContext';

const getFonts = () =>
  Font.loadAsync({
    'sansation': require('./assets/fonts/sansation/Sansation_Regular.ttf'),
    'sansation-bold': require('./assets/fonts/sansation/Sansation_Bold.ttf'),
  });

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [connected, setConnected] = useState(false);
  const isconnected = {
    connected: connected,
    setConnected,
  }
  if (appIsReady) {
    return <appContext.Provider value={isconnected}>
      <AppNavigator />
      </appContext.Provider>;
  } 
  
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setAppIsReady(true)}
        onError={console.warn}
      />
    );
  }
}

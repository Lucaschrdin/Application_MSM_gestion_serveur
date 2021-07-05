import React from 'react';
import { StyleSheet, View, Text, Dimensions,} from 'react-native';
import { globalStyles } from '../styles/global';
import VideoPlayer from 'react-native-video-controls';
import { useState } from 'react';
import Orientation from 'react-native-orientation-locker';



export default function Live({ route, navigation }) {
    

    const [screenOrientation, setScreenOrientation] = useState("PORTAIT");
    const [hideTabBar, setHideTabBar] = useState(true)

    const EnterFullScreenMode = () => {
        Orientation.lockToLandscapeLeft()
        _onOrientationDidChange("LANDSCAPE-LEFT")
        setHideTabBar(false)
    }

    const ExitFullScreenMode = () => {
        Orientation.lockToPortrait()
        _onOrientationDidChange("PORTRAIT")
        setHideTabBar(true)
    }

    {hideTabBar === true
    ? navigation.setOptions({tabBarVisible: true})
    : navigation.setOptions({tabBarVisible: false})
    }
    

    const _onOrientationDidChange = (orientation) => {
        setScreenOrientation(orientation)
    };

    Orientation.getDeviceOrientation((deviceOrientation)=> {
        _onOrientationDidChange(deviceOrientation);
      });

    Orientation.addDeviceOrientationListener(_onOrientationDidChange)

    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.content}>
                
                <Text style={{ ...globalStyles.title, paddingBottom: 23 }}>Profitez du live !</Text>      
                
                <View style={styles.video}>
                    <VideoPlayer
                    style= {styles.video}
                    source={{ uri: 'http://centrale.freelab.inno.jnlab.net/essai4.mp4' }}
                    resizeMode={'contain'}
                    onEnterFullscreen = {EnterFullScreenMode}
                    onExitFullscreen = {ExitFullScreenMode}
                    toggleResizeModeOnFullscreen = {false}
                    disableTimer = {true}
                    disableBack = {true}
                    disableVolume = {true}
                    showTimeRemaining  ={false}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    video: {
        width :'100%',
        height :'100%',
        position : 'absolute',
        top :30,
        transform: [{rotate:'0deg'}],
    },
})
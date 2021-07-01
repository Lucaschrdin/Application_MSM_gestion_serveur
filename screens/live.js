import React from 'react';
import { StyleSheet, View, Text, Dimensions} from 'react-native';
import { globalStyles } from '../styles/global';
import Video from 'react-native-video';



export default function Live() {
    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.content}>
                <Text style={{ ...globalStyles.title, paddingBottom: 23 }}>Profitez du live !</Text>
                <View style={styles.video}>
                <Video
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                 style = {styles.video}
                 paused = {false}
                 resizeMode={"contain"}
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
    }
})
import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default function Connection({route, navigation }) {

    const { onClick } = route.params
    const backgroundImage = require('../assets/images/Poseidon2.jpg')

    return(
        <View >
            <ImageBackground source={backgroundImage} style={styles.image}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Image source={require('../assets/logo_msm_no_background.png')} style={styles.logo}/>
                    </View>
                    <View style={{}}>
                        <TouchableOpacity style={styles.button} onPress={() =>global.connected = false & onClick(true)}>
                            <Text style={styles.text}>
                                {' '}Accès grand public
                            </Text>
                        </TouchableOpacity> 
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Log In Scientists')}>
                        
                            <Text style={styles.text}>
                                {'      '}Accès réservé
                            </Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        height: '15%',
        top: '-15%'
    },
    logo: {
        top:35,
        right: 0,
        width: 150,
        height: 73,
        margin: 10
    },
    button: {
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15, 
        width: 280,
        height: 60,
        alignSelf: 'center',
        left: '0%', 
        top: '-30%',
        backgroundColor: '#00A6FFB9',
    },
    textCon: {
        fontSize: 16,
        margin: 10
    },
    text: {
        fontSize: 28,
        margin: 10,
        color: 'white',
        fontFamily: 'sansation',
        // textAlign:'justify',
    },
    login: {
        borderRadius: 10,
        marginTop: 25,
        marginBottom: 15, 
        width: 280,
        alignSelf: 'center',
        left: '0%', 
        top: '50%',
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    content: {
        flex: 1,
        justifyContent: 'space-around'
    },
})
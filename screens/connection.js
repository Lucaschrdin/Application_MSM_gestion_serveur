import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default function Connection({route, navigation }) {

    const { onClick } = route.params

    return(
        <SafeAreaView >
            <View  style={styles.header}>
                <Image source={require('../assets/logo_msm_no_background.png')} style={styles.logo}/>
            </View>
            
            <View style={{}}>
                    
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Log In Scientists')}>
                        
                        <Text style={styles.text}>
                            Se connecter
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => onClick(true)}>
                        <Text style={styles.text}>
                            Continuer sans se connecter
                        </Text>
                    </TouchableOpacity> 
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        height: '15%'
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
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15, 
        width: 280,
        alignSelf: 'center',
        left: '0%', 
        top: '50%',
    },
    textCon: {
        fontSize: 16,
        margin: 10
    },
    text: {
        fontSize: 25,
        margin: 10,
        justifyContent: 'center'
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
})
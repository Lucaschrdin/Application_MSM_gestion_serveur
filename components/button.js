import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';

export default function Button() {
    return(
        <TouchableOpacity onPress={() => navigation.goBack()} style={{top: '-5%'}}>
            <View style={styles.returnbutton}>
                <Icon name="left" size={30}/> 
                <Text style={{fontSize: 20}}>Retour</Text> 
            </View>
        </TouchableOpacity>
    )
    
}


const styles = StyleSheet.create({
    returnbutton: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15, 
        width: 100,
    },
})
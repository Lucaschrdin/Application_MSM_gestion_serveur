import React from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function SignUp({route, navigation }) {

    const { onClick } = route.params

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ECECEC', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor: '#ECECEC'}}>
                <Text style={{fontSize: 24 }}>Sign Up</Text>
                <TextInput
                    placeholder="Email"
                    style={{fontSize: 24 }} 
                    />
                <TextInput
                    placeholder="Password"
                    style={{fontSize: 24 }} 
                    />
                    <TouchableOpacity style={styles.btn} onPress={() => onClick(true)}>
                        <Text style={styles.btnText}>
                            <Icon name="plus" size={20} />
                            S'inscrire
                        </Text>
                    </TouchableOpacity>   
            </View>
        </SafeAreaView>
        
    )
};

const styles = StyleSheet.create({
    
    btn: {
        padding: 9,
        margin: 5,
      },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
      },
})
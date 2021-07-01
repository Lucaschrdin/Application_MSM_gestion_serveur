import React, {useState, useContext} from 'react';
import { SafeAreaView, View, Text, TextInput, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import appContext from "../components/appContext";

export default function SignUp({route, navigation }) {

    const { onClick } = route.params
    const backgroundImage = require('../assets/images/poseidon.jpg')
    const [enteredEmail, setEnteredEmail] = useState('');
    const can_connect = (email) => true; //A completer quand on aura acces au serveur
    const myContext = useContext(appContext);
    

    return(
        <View>
            <ImageBackground source={backgroundImage} style={styles.image}>
            <View style={styles.login}>
                <Text style={styles.text}>Rentrer votre adresse Email pour vérifier votre identité</Text>
                <View >
                    <TextInput
                        placeholder="Email"
                        style={{fontSize: 24, backgroundColor:'white', }} 
                        value={enteredEmail}
                        onChangeText={text => setEnteredEmail(text)}
                    />
                </View>
                    <TouchableOpacity style={styles.btn} onPress={() => 
                        can_connect(enteredEmail) ? myContext.setConnected(true)  & onClick(true) : onClick(false)  
                        }>
                        <Text style={styles.btnText}>
                            <Icon name="plus" size={20} />
                            Se connecter
                        </Text>
                    </TouchableOpacity>   
            </View>
            </ImageBackground>
        </View>
        
    )
};

const styles = StyleSheet.create({
    
    btn: {
        padding: 9,
        margin: 5,
      },
    btnText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
      },
      image: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
      },
      text: {
        fontSize: 25,
        margin: 10,
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'sansation',
    },
    login: {
        opacity:0.8, 
        top:'30%',
    },
})
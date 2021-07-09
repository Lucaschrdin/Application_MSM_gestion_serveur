import React, {useState, useContext} from 'react';
import { SafeAreaView, View, Text, TextInput, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import appContext from "../components/appContext";
import SSHClient from 'react-native-sshclient';
import publicIP from 'react-native-public-ip';

export default function SignUp({route, navigation }) {

    const { onClick } = route.params
    const backgroundImage = require('../assets/images/poseidon.jpg')
    const [enteredEmail, setEnteredEmail] = useState('');
    const can_connect = (email) => true; //A completer quand on aura acces au serveur
    const myContext = useContext(appContext);

    const [answer, setAnswer] = useState(false)

    

    async function conection() {
        SSHClient.setup("noc","185.61.185.164",22);
        SSHClient.usePrivateKey(false);
        SSHClient.setPassword("9Typ948dfgdkjnyN45fs");
        await SSHClient.connect();   
        var command = `python email.py ${enteredEmail}`;
    
        await SSHClient.execute(command).then(
            (result)=>{
                {result[0]=== "oui" && (setAnswer(true))}
                console.log(result)
            },
            (error)=>{
                console.log(error);
            }
          );
        await SSHClient.close();
    }

    {answer
        ? myContext.setConnected(true)  & onClick(true) 
        : onClick(false)
    }
 
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
                    <TouchableOpacity style={styles.btn} onPress={()=>
                        conection()
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
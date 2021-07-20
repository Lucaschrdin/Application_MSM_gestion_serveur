import React, {useState, useContext} from 'react';
import { SafeAreaView, View, Text, TextInput,
     ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import appContext from "../components/appContext";
import SSHClient from 'react-native-sshclient';
import publicIP from 'react-native-public-ip';

export default function SignUp({route, navigation }) {

    const { onClick } = route.params
    const backgroundImage = require('../assets/images/poseidon.jpg')
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPwd, setEnteredPwd] = useState('');
    const can_connect = (email) => true; //A completer quand on aura acces au serveur
    const myContext = useContext(appContext);

    const [answer, setAnswer] = useState(false)

    const input_missing = () => {
        Alert.alert(
            "Erreur de connexion",
            "L'adresse Email ou le mot de passe est incorect",
            [
              {
                text: "Fermer",
                style: "cancel",
              },
            ],
            {
              cancelable: true,
              onDismiss: () =>
                Alert.alert(
                  "L'adresse Email ou le mot de passe est incorect"
                ),
            }
          );
    }

    async function conection() {
        SSHClient.setup("noc","185.61.185.164",22);
        SSHClient.usePrivateKey(false);
        SSHClient.setPassword("9Typ948dfgdkjnyN45fs");
        await SSHClient.connect(); 
        var command = `python email.py ${enteredEmail} ${enteredPwd}`;
    
        await SSHClient.execute(command).then(
            (result)=>{
                {result[0]=== "oui" 
                ? (setAnswer(true))
                : input_missing()
            }
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
                <Text style={styles.text}>
                    Rentrer votre adresse Email et le mot de passe
                </Text>
                <View >
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput} 
                        value={enteredEmail}
                        onChangeText={text => setEnteredEmail(text)}
                    />
                    <TextInput
                    placeholder="Password"
                    style={styles.textInput} 
                    value={enteredPwd}
                    onChangeText={text => setEnteredPwd(text)}
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
        fontSize: 30,
        textAlign: 'center',
        backgroundColor:'#00A6FFB9', // à revoir
        marginTop: 20,
      },
      image: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
      },
      text: {
        fontSize: 25,
        margin: 10,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'sansation',
        backgroundColor:'#00A6FFB9', // à revoir 
        marginBottom: 20,
    },
    textInput: {
        fontSize: 24,
        backgroundColor:'white', 
    },
    login: {
        opacity:0.8, 
        top:'30%',
    },
})
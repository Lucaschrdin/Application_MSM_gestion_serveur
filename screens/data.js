import React, { useState,useContext } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, Image,
     TouchableOpacity, Button, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import CardDataScientist from '../components/cardDataScientist';
import CardDataPeople from '../components/cardDataPeople';
import DataInfo from '../components/datainfo';
import appContext from "../components/appContext";

export default function Data({ navigation }) {
    const [pH, setPH] = useState({})
    const [temperature, setTemperature] = useState({})
    const [turbidity, setTurbidity] = useState({})
    const [dailyData, setDailyData] = useState(true)
    const [previousDataPh, setPreviousDataPh] = useState(false)
    const [previousDataTemp, setPreviousDataTemp] = useState(false)
    const [previousDataTurb, setPreviousDataTurb] = useState(false)
    const [dataInfo, setDataInfo] = useState(false)
    const [dataInfoDetail, setDataInfoDetail] = useState(false)
    const myContext = useContext(appContext)
    //utiliser avec myContext.connected

    var base64 = require('base-64');

    var url = 'http://centrale.freelab.inno.jnlab.net/admin/ph.png';
    var username = 'admin';
    var password = '45dVbhutF91';
                
    var headers = new Headers();
    // headers.append('Content-Type', 'image/json');
    headers.append('Authorization', 'Basic' + base64.encode(username + ":" + password))

    fetch(url, {method:'GET',
                        headers: headers,
                        credentials: 'admin:45dVbhutF91'
                       })
    .then(response => response.json())
    .then(json => console.log(json))

    const showDailyData = () => {
        setDailyData(true)
        setPreviousDataPh(false)
        setPreviousDataTemp(false)
        setPreviousDataTurb(false)
        setDataInfo(false)
        setDataInfoDetail(false)
    }

    const showPreviousDataPh = () => {
        setDailyData(false)
        setPreviousDataPh(true)
        setPreviousDataTemp(false)
        setPreviousDataTurb(false)
        setDataInfo(false)
        setDataInfoDetail(false)
    }

    const showPreviousDataTemp = () => {
        setDailyData(false)
        setPreviousDataPh(false)
        setPreviousDataTemp(true)
        setPreviousDataTurb(false)
        setDataInfo(false)
        setDataInfoDetail(false)
    }
    
    const showPreviousDataTurb = () => {
        setDailyData(false)
        setPreviousDataPh(false)
        setPreviousDataTemp(false)
        setPreviousDataTurb(true)
        setDataInfo(false)
        setDataInfoDetail(false)
    }

    const showDataInfo = () => {
        setDailyData(false)
        setPreviousDataPh(false)
        setPreviousDataTemp(false)
        setPreviousDataTurb(false)
        setDataInfo(true)
        setDataInfoDetail(false)
    }

    const showDataInfoDetail = () => {
        setDailyData(false)
        setPreviousDataPh(false)
        setPreviousDataTemp(false)
        setPreviousDataTurb(false)
        setDataInfo(false)
        setDataInfoDetail(true)
    }



    const fakeDataForDemo = [
        { variable: 'pH', values: [], latestValue: 6, unit: "", lastRefresh: "1 minute", 
        description: "Le pH renseigne sur l'acidit?? de l'eau."},
        { variable: 'Temp??rature', values: [], latestValue: 20, unit: "??C", lastRefresh: "1 minute",},
        { variable: 'Turbidit??', values: [], latestValue: 30, unit: "UTN", lastRefresh: "1 minute", 
        description: "La turbidit?? renseigne sur la clart?? de l'eau."}
    ]

    const fakeDataForDemoDetail = [
        { variable: 'pH',
        description: "Le pH est l'abr??viation de ???potentiel hydrog??ne??? et mesure l???activit?? chimique des ions hydronium " 
        + "naturellement pr??sents en solution aqueuse. Lors d???une mesure, on obtient une valeur entre 0 et 14 : 0 correspond ?? un "
        + "milieu tr??s acide et 14 ?? un milieu tr??s basique. L???acidification des oc??ans fait r??f??rence ?? cet indicateur : le CO2 "
        + "pr??sent dans l???air se dissout dans les masses d???eau terrestres, et, de par une r??action chimique, tend ?? rendre plus acide "
        + "le pH. Pour preuve, le pH maritime est pass?? de 8,25 ?? 8,14 entre 1751 et 2004. Cela pose de tr??s forts probl??mes au niveau "
        + "de la biodiversit?? marine qui doit s???adapter ?? ces nouvelles conditions de vie."},
        { variable: 'Temp??rature',
        description: "Cet indicateur est compr??hensible par tous et est utile pour deux aspects : il permet aux utilisateurs "
        + "de conna??tre la temp??rature de l???eau dans laquelle ils vont plonger, et permet aux scientifiques de conna??tre pr??cis??ment "
        + "l?????volution de la temp??rature (?? 0,1 ??C). Conscients du probl??me de r??chauffement des mers du globe, l???implantation d???un tel "
        + "capteur aux abords d???une grande ville comme Marseille s???inscrit dans une d??marche de monitoring du r??chauffement climatique."},
        { variable: 'Turbidit??',
        description: "Indicateur cl?? de la qualit?? de l???eau, la turbidit?? ??value la quantit?? de particules en suspension dans "
        + "un fluide. Dans le cas de la mer, une turbidit?? anormalement grande peut indiquer la pr??sence de mati??re polluante "
        + "en milieu marin. Pour remarque, une grande quantit?? de particules en suspension dans l???eau de mer implique une grande "
        + "absorption des rayons du Soleil : le processus de photosynth??se actif chez les plantes aquatiques s???en trouve alors limit??. "
        + "Dans le m??me propos, l???absorption des rayons lumineux signifie un r??chauffement de l???eau. Il faut savoir que les oc??ans "
        + "sont consid??r??s comme le thermostat de la plan??te. Si le thermostat est plus chaud, la plan??te est plus chaude aussi. "
        + "La turbidit?? peut ??tre visible ?? l'??il nu : on peut voir que l???eau est trouble, sa couleur change. C???est d???ailleurs une "
        + "des caract??ristiques utilis??es pour la mesurer. Elle s???exprime en UTN (Unit?? de Turbidit?? N??ph??lom??trique)."
        +"\n" +"\n" +"\n" +"\n" +"\n" +"\n" +"\n" +"\n" +"\n" +"\n"}
    ]

    if (myContext.connected){ // Screen scientist
    return(
        
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.content}>
                <Text style={{ ...globalStyles.title, paddingBottom: 23 }}>Donn??es</Text>
                <Text style={{marginTop:-15, marginBottom: 10}}>Les donn??es ne sont pas v??rifi??es par un organisme</Text>
                <Button 
                style={styles.button} 
                title='Donn??es du jour'
                onPress={showDailyData}
                />
                {/* Montre les donn??es du jour */}
                {dailyData && <FlatList 
                    data={fakeDataForDemo}
                    renderItem={({ item }) => (
                                <CardDataScientist data={item}/> 
                            )
                    }
                    keyExtractor={item => item.variable}
                    showsVerticalScrollIndicator={false}
                />
                }
                <Button 
                style={styles.button} 
                title='Donn??es pr??c??dentes du ph' 
                onPress={showPreviousDataPh}
                />
                {previousDataPh && 
                <Image
                style={styles.image}
                source={{
                // uri: 'http://admin:45dVbhutF91@centrale.freelab.inno.jnlab.net/admin/ph.png',
                uri: 'http://centrale.freelab.inno.jnlab.net/ph.png'
                }}/>
                }

                <Button 
                style={styles.button} 
                title='Donn??es pr??c??dentes de la temp??rature' 
                onPress={showPreviousDataTemp}
                />
                {previousDataTemp && 
                <Image
                style={styles.image}
                source={{
                uri: 'http://centrale.freelab.inno.jnlab.net/temp.png',
                }}/>
                }

                <Button 
                style={styles.button} 
                title='Donn??es pr??c??dentes de la turbidit??' 
                onPress={showPreviousDataTurb}
                />
                {previousDataTurb && 
                <Image
                style={styles.image}
                source={{
                uri: 'http://centrale.freelab.inno.jnlab.net/turbidite.png',
                }}/>
                }
                 
            </View>
        </SafeAreaView>
    )

}
else {
    return( // Screen people
        <SafeAreaView style={globalStyles.container}>
            <View style={styles.content}>
                <Text style={{ ...globalStyles.title, paddingBottom: 23 }}>Donn??es</Text>
                <Text style={{marginTop:-15, marginBottom: 10}}>Les donn??es ne sont pas v??rifi??es par un organisme</Text>
                <Button 
                style={styles.button} 
                title='Donn??es du jour'
                onPress={showDailyData}
                />
                {/* Montre les donn??es du jour */}
                {dailyData && <FlatList 
                    data={fakeDataForDemo}
                    renderItem={({ item }) => (
                                <CardDataPeople data={item}/> 
                            )
                    }
                    keyExtractor={item => item.variable}
                    showsVerticalScrollIndicator={false}
                />
                }

                <Button 
                style={styles.button} 
                title='Informations sur les donn??es'
                onPress={showDataInfo}
                />

                {/* Montre la signification des donn??es */}
                {dataInfo && <FlatList 
                    data={[
                        { variable: 'pH', description: "Le pH renseigne sur l'acidit?? de l'eau."},
                        { variable: 'Turbidit??', description: "La turbidit?? renseigne sur la clart?? de l'eau."}
                    ]}
                    renderItem={({ item }) => (
                        <View>
                            <Text style = {styles.txtTitle}>
                                {item.variable}{'\n'}
                            </Text> 
                            <Text style = {styles.txtContent}>
                                {item.description}{'\n'}{'\n'}
                            </Text>
                        </View>
                    )}
                    keyExtractor={item => item.variable}
                />}
                
                <Button 
                style={styles.button} 
                title='Informations sur les donn??es en d??tail'
                onPress={showDataInfoDetail}
                />

                {/* Montre la signification en d??tail des donn??es */}
                {dataInfoDetail && <FlatList 
                    data={fakeDataForDemoDetail}
                    renderItem={({ item }) => (
                        <View>
                            <Text style = {styles.txtTitle}>
                                {item.variable}{'\n'}
                            </Text> 
                            <Text style = {styles.txtContent}>
                                {item.description}{'\n'}{'\n'}
                            </Text>
                        </View>
                    )}
                    keyExtractor={item => item.variable}
                />}
                </View>
        </SafeAreaView>
    )
}

}

const styles = StyleSheet.create({
    content: {
        
        backgroundColor:'#ECECEC',
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
        fontFamily: 'sansation',
    },
    buttonDetail:{

    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain', 
        top: -5,
      },
    txtTitle:{
        fontFamily: 'sansation',
        fontWeight: 'bold',
        marginBottom:-10, 
        fontSize: 18
    },
    txtContent: {
        fontFamily: 'sansation',
        fontSize: 18
    },
})
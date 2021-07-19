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
    const myContext = useContext(appContext)
    //utiliser avec myContext.connected

    const showDailyData = () => {
        setDailyData(true)
        setPreviousDataPh(false)
        setPreviousDataTemp(false)
        setPreviousDataTurb(false)
        setDataInfo(false)
    }

    const showPreviousDataPh = () => {
        setDailyData(false)
        setPreviousDataPh(true)
        setPreviousDataTemp(false)
        setPreviousDataTurb(false)
        setDataInfo(false)
    }

    const showPreviousDataTemp = () => {
        setDailyData(false)
        setPreviousDataPh(false)
        setPreviousDataTemp(true)
        setPreviousDataTurb(false)
        setDataInfo(false)
    }
    
    const showPreviousDataTurb = () => {
        setDailyData(false)
        setPreviousDataPh(false)
        setPreviousDataTemp(false)
        setPreviousDataTurb(true)
        setDataInfo(false)
    }

    const showDataInfo = () => {
        setDailyData(false)
        setPreviousDataPh(false)
        setPreviousDataTemp(false)
        setPreviousDataTurb(false)
        setDataInfo(true)
    }



    const fakeDataForDemo = [
        { variable: 'pH', values: [], latestValue: 6, unit: "", lastRefresh: "1 minute", 
        description: "Le pH est l'abréviation de “potentiel hydrogène” et mesure l’activité chimique des ions hydronium " 
        + "naturellement présents en solution aqueuse. Lors d’une mesure, on obtient une valeur entre 0 et 14 : 0 correspond à un "
        + "milieu très acide et 14 à un milieu très basique. L’acidification des océans fait référence à cet indicateur : le CO2 "
        + "présent dans l’air se dissout dans les masses d’eau terrestres, et, de par une réaction chimique, tend à rendre plus acide "
        + "le pH. Pour preuve, le pH maritime est passé de 8,25 à 8,14 entre 1751 et 2004. Cela pose de très forts problèmes au niveau "
        + "de la biodiversité marine qui doit s’adapter à ces nouvelles conditions de vie."},
        { variable: 'Température', values: [], latestValue: 19.8, unit: "°C", lastRefresh: "1 minute", 
        description: "Cet indicateur est compréhensible par tous et est utile pour deux aspects : il permet aux utilisateurs "
        + "de connaître la température de l’eau dans laquelle ils vont plonger, et permet aux scientifiques de connaître précisément "
        + "l’évolution de la température (± 0,1 °C). Conscients du problème de réchauffement des mers du globe, l’implantation d’un tel "
        + "capteur aux abords d’une grande ville comme Marseille s’inscrit dans une démarche de monitoring du réchauffement climatique."},
        { variable: 'Turbidité', values: [], latestValue: 30, unit: "UTN", lastRefresh: "1 minute", 
        description: "Indicateur clé de la qualité de l’eau, la turbidité évalue la quantité de particules en suspension dans "
        + "un fluide. Dans le cas de la mer, une turbidité anormalement grande peut indiquer la présence de matière polluante "
        + "en milieu marin. Pour remarque, une grande quantité de particules en suspension dans l’eau de mer implique une grande "
        + "absorption des rayons du Soleil : le processus de photosynthèse actif chez les plantes aquatiques s’en trouve alors limité. "
        + "Dans le même propos, l’absorption des rayons lumineux signifie un réchauffement de l’eau. Il faut savoir que les océans "
        + "sont considérés comme le thermostat de la planète. Si le thermostat est plus chaud, la planète est plus chaude aussi. "
        + "La turbidité peut être visible à l'œil nu : on peut voir que l’eau est trouble, sa couleur change. C’est d’ailleurs une "
        + "des caractéristiques utilisées pour la mesurer. Elle s’exprime en UTN (Unité de Turbidité Néphélométrique)."}
    ]
    if (myContext.connected){
    return(
        
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.content}>
                <Text style={{ ...globalStyles.title, paddingBottom: 23 }}>Données</Text>
                <Button 
                style={styles.button} 
                title='Données du jour'
                onPress={showDailyData}
                />
                {/* Montre les données du jour */}
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
                title='Données précédentes du ph' 
                onPress={showPreviousDataPh}
                />
                {previousDataPh && 
                <Image
                style={styles.image}
                source={{
                uri: 'http://centrale.freelab.inno.jnlab.net/ph.png',
                }}/>
                }

                <Button 
                style={styles.button} 
                title='Données précédentes de la température' 
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
                title='Données précédentes de la turbidité' 
                onPress={showPreviousDataTurb}
                />
                {previousDataTurb && 
                <Image
                style={styles.image}
                source={{
                uri: 'http://centrale.freelab.inno.jnlab.net/turbidite.png',
                }}/>
                }

                {/* Montre les données précédentes, le commentaire est un wip*/}
                {/* {previousData && 
                <View style={{flex:1}}>
                    <Image
                        style={styles.image}
                        source={{
                        uri: 'http://centrale.freelab.inno.jnlab.net/ph.png',
                        }}/>
                    <Image
                        style={styles.image}
                        source={{
                        uri: 'http://centrale.freelab.inno.jnlab.net/temp.png',
                        }}/>
                </View>}
                <View style={{flex:2}}>
                    <Image
                        style={styles.image}
                        source={{
                        uri: 'http://centrale.freelab.inno.jnlab.net/turbidite.png',
                        }}/>
                </View> */}

                {/* <Button 
                style={styles.button} 
                title='Informations sur les données'
                onPress={showDataInfo}
                />

                Montre la signification des données
                {dataInfo && <FlatList 
                    data={fakeDataForDemo}
                    renderItem={({ item }) => (
                        <DataInfo item={item} />
                    )}
                    keyExtractor={item => item.variable}
                />} */}
                <Text>Les données ne sont pas vérifiées par un organisme</Text>
            </View>
        </SafeAreaView>
    )

}
else {
    return(
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.content}>
                <Text style={{ ...globalStyles.title, paddingBottom: 23 }}>Données</Text>
                <Button 
                style={styles.button} 
                title='Données du jour'
                onPress={showDailyData}
                />
                {/* Montre les données du jour */}
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
                title='Informations sur les données'
                onPress={showDataInfo}
                />

                {/* Montre la signification des données */}
                {dataInfo && <FlatList 
                    data={fakeDataForDemo}
                    renderItem={({ item }) => (
                        <DataInfo item={item} />
                    )}
                    keyExtractor={item => item.variable}
                />}

                <Text>Les données ne sont pas vérifiées par un organisme</Text>
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
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain', 
        top: -5,
      },
})
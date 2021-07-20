import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

export default function CardDataPeople({ data }) {

    const latestValue = data.latestValue

    return(
        <View style={ styles.container }>
            <View style={ styles.card }>
                <View style={ styles.text }>
                    <Text 
                    style={{ ...styles.title, textTransform: data.variable !== "pH" ? 'capitalize' : 'none'}}>
                        { data.variable }:
                        </Text>
                </View>
                <View style={ styles.valueContainer }>
                {data.variable === 'pH' &&
                    ( latestValue > 7 
                    ? <Icon name="grin-alt" size={30} color="#228b22"  />
                    : <Icon name="meh" size={30} color="#ffd700" />
                    )
                }
                {data.variable === 'Température' &&
                    ( latestValue < 17 
                        ?<Text style={ styles.coldWater }>{ data.latestValue } { data.unit }</Text>
                        :latestValue>17 & latestValue<26 
                            ?<Text style={ styles.temperateWater }>{ data.latestValue } { data.unit }</Text>
                        :<Text style={ styles.hotWater }>{ data.latestValue } { data.unit }</Text>
                        )
                }
                {data.variable === 'Turbidité' &&
                    ( latestValue < 5 
                    ?<Text style={ styles.value }>Eau claire</Text>
                    :latestValue>5 & latestValue<30 
                        ?<Text style={ styles.value }>Eau légérement trouble</Text>
                    :<Text style={ styles.value }>Eau trouble </Text>
                    )
                    
                }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        height: 100,
        alignItems: 'center',
        margin: 10,
    },

    card: {
        flexDirection: 'row'
    },

    text: {
        marginLeft: 10
    },

    title: {
        fontFamily: 'sansation-bold',
        fontSize: 24,
        color: "#00A6FF",
    },

    valueContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },

    value: {
        fontFamily: 'sansation-bold',
        fontSize: 24,
        color: "#00A6FF",
        marginRight: 15
    },
    coldWater: {
        fontFamily: 'sansation-bold',
        fontSize: 24,
        color: "#000080",
        marginRight: 15
    },
    temperateWater: {
        fontFamily: 'sansation-bold',
        fontSize: 24,
        color: "#228b22",
        marginRight: 15
    },
    hotWater: {
        fontFamily: 'sansation-bold',
        fontSize: 24,
        color: "#ff6347",
        marginRight: 15
    }
})
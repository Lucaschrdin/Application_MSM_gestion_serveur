import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

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
                    ? <Icon name="grin-beam" size={20} />
                    : <Icon name="meh-blank" size={20} />
                    )
                }
                {data.variable === 'Température' &&
                    <Text style={ styles.value }>{ data.latestValue } { data.unit }</Text>
                }
                {data.variable === 'Turbidité' &&
                    <Text style={ styles.value }>{ data.latestValue } { data.unit }</Text>
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
    }
})
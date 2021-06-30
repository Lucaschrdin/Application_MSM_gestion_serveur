import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';

export default function DataInfo({item}) {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.detailsContent}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1, marginLeft: 10, marginTop: 20, marginRight: 10, marginBottom: 10 }}>
                    <Text>{item.variable}</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 15 }}>{ item.description }</Text>
                </ScrollView>
            </View>
        </View>

    )}
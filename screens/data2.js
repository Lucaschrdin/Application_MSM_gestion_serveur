import { response } from 'express';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native';

export default class Data2 extends React.Component {
    constructor(){
        super();
        this.state = {
            data: null,
            loaded: true,
            error: null,
        }
    }
    
    

    

    render() {
        return (
            <View>
                { !this.state.loaded && (
                    <Text>Loading</Text>
                )}
                <Button title="Get Data"
                onPress={this.getData} />
                { this.state.error && (
                    <Text>{this.state.error}</Text>
                )}
                { this.state.loaded  && this.state.data != null ? (
                    <View>
                        <Text>Para1</Text>
                        <FlatList 
                        data={this.state.data.parameters[0].readings}
                        renderItem={({item}) => (
                            <Text>{item.timestamp}</Text>
                        )}/>
                        <Text>Para2</Text>
                        <FlatList 
                        data={this.state.data.parameters[1].readings}
                        renderItem={({item}) => (
                            <Text>{item.timestamp}</Text>
                        )}/>
                        <Text>Para3</Text>
                        <FlatList 
                        data={this.state.data.parameters[2].readings}
                        renderItem={({item}) => (
                            <Text>{item.timestamp}</Text>
                        )}/>
                    </View>
                    )
                    : (<Text>Rien</Text>)
                }
            </View>
        )
    };
}
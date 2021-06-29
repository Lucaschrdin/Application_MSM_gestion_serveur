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
    
    baseURL = 'https://www.hydrovu.com/public-api/v1/locations/5980597329854464/data?startTime=0';

    getData = (ev) => {
        this.setState({loaded: false, error: null});
        let url = this.baseURL;
        let h = new Headers();
        h.append('accept', 'application/json');
        h.append('Authorization', 'Bearer 4fffaeb8-cdf9-4cc9-b854-5b842dd8e526');
        
        let req = new Request(url, {
            method: "GET",
            headers: h
            },
        );

        fetch(req)
        .then(response => response.json())
        .then(this.showData)
        .catch(this.badStuff)
    }
    showData = (data) => {
        this.setState({loaded: true, data});
        console.log(data);
        console.log("data shown")
    }
    badStuff = (err) => {
        this.setState({loaded: true, error: err.message})
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
                            <Text>{item.value}</Text>
                        )}/>
                        <Text>Para2</Text>
                        <FlatList 
                        data={this.state.data.parameters[1].readings}
                        renderItem={({item}) => (
                            <Text>{item.value}</Text>
                        )}/>
                        <Text>Para3</Text>
                        <FlatList 
                        data={this.state.data.parameters[2].readings}
                        renderItem={({item}) => (
                            <Text>{item.value}</Text>
                        )}/>
                    </View>
                    )
                    : (<Text>Rien</Text>)
                }
            </View>
        )
    };
}
import { response } from 'express';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native';
import FTP from 'react-native-ftp';

export default class Data2 extends React.Component {
    constructor(){
        super();
        this.state = {
            data: null,
            loaded: true,
            error: null,
        }
    }
    
    // FTP.setup("ftp.hydrovu.com",2121) //Setup host
    // FTP.login("fabien.lemarchand@fresnel.fr","msm2021")
    // .then((result)=>{
    //     FTP.list(".")
    //     .then((result)=>{
    //         console.log(result);
    //     }
    //     );
    // },
    // (error)=>{
    //     alert(error);
    // }
    // )

    d = new Date();

    year = this.d.getFullYear();
    month = this.d.getMonth();
    day = this.d.getDate();
    hour = this.d.getHours();
    minute = this.d.getMinutes();
    second = this.d.getSeconds();

    endTime = (this.year-1970)*(365*24*3600) + (this.month-1)*(31*24*3600) + (this.day-1)*(24*3600) + (this.hour-1)*(3600) +(this.minute-1)*(60) + this.second

    baseURL = 'https://www.hydrovu.com/public-api/v1/locations/5980597329854464/data?startTime=0';

    testURL = 'https://www.hydrovu.com/public-api/v1/locations/5980597329854464/data?startTime=0';

    getData = (ev) => {
        this.setState({loaded: false, error: null});
        let url = this.baseURL;
        let h = new Headers();
        h.append('accept', 'application/json');
        h.append('Authorization', 'Bearer ece4587c-27ff-4f14-b9b1-a791c393722f');
        
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
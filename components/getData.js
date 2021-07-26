import { response } from 'express';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native';
import FTP from 'react-native-ftp';

export default function DataInfo() {


    FTP.setup("ftp.hydrovu.com",2121) //Setup host
    FTP.login("fabien.lemarchand@fresnel.fr","msm2021")
    .then((result)=>{
        FTP.list(".")
        .then((result)=>{
            console.log(result);
        }
        );
    },
    (error)=>{
        alert(error);
    }
    )


}
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
import React, {Component} from 'react';
import {View, StyleSheet, Text, } from 'react-native';

export default class CustomCom extends Component{
    render(){
        return(
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20,margin:10}}>{this.props.name}</Text>
                <Text style={{fontSize:20,margin:10}}>{this.props.work}</Text>
            </View>
        );
    }
}
import React,{Component} from 'react';
import {View, Text} from 'react-native';

export default class ClassCom extends Component{
    render(){
        return(
            <View>
                <Text>This is {this.props.name}</Text>
            </View>
        );
    }
}
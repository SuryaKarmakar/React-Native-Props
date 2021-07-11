import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomCom = (props) => {
    const {name, work} = props;
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textStyle}>{name}</Text>
            <Text style={styles.textStyle}>{work}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20, margin: 10
    }
})
export default CustomCom;

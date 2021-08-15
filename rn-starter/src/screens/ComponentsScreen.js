import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponentsScreen = () =>{
    return <Text style={styles.textStyle}>Just A Test Component Screen :D </Text>;
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 90
    }
});

export default ComponentsScreen;
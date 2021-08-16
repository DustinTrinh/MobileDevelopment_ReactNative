import React from 'react';
import {Text, StyleSheet,View} from 'react-native';

const ComponentsScreen = () =>{
    const greeting = "It's DustyTheCutie";
    const greeting2 = <Text>What's up</Text>
    return (
    <View>
        <Text style={styles.textStyle}>Getting start with React Native </Text>
        <Text style={styles.nameStyle}>{greeting}</Text>
        {greeting2}
    </View>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    },
    nameStyle:{
        fontSize: 20
    }
});

export default ComponentsScreen;
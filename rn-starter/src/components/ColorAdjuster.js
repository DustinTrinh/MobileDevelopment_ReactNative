import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorAdjuster = (props) => {
    return (
    <View>
        <Text> {props.color}</Text>
        <Button onPress={()=> props.onIncrease()} title={`Increase ${props.color}`}/>
        <Button onPress={()=> props.onDecrease()} title={`Decrease ${props.color}`}/>
    </View>
    
    );
}

const styles = StyleSheet.create({

})

export default ColorAdjuster;
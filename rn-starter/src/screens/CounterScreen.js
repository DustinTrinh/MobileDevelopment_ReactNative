import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TemplateScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
    <View>
        <Button title="Increase" onPress={() => {
            //Don't do this. Don;t change state variable dynamically
            //counter++;
            setCounter(counter+1);
        }}/>
        <Button title="Decrease" onPress={() => {
            //Don't do this. Don;t change state variable dynamically
            //counter--;
            setCounter(counter-1);
        }}/>
        <Text>Current Value: {counter}</Text>
    </View>
    );
}

const styles = StyleSheet.create({

})

export default TemplateScreen;
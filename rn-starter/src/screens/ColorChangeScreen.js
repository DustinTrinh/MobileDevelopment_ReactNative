import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const ColorChangeScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const INCREMENT_COLOR = 20;
    const setColor = (color, change) =>{
       switch (color){
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red+change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green+change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue+change);
                return;
            default:
                return;
       }
    };

    return (
    <View>
        <ColorAdjuster 
            onIncrease={() => setColor('red', INCREMENT_COLOR)} 
            onDecrease={() => setColor('red', INCREMENT_COLOR * -1)} 
            color="Red"
        />
        <ColorAdjuster 
            onIncrease={() => setColor('green', INCREMENT_COLOR)} 
            onDecrease={() => setColor('green', INCREMENT_COLOR * -1)} 
            color="Green"
        />
        <ColorAdjuster
            onIncrease={() => setColor('blue', INCREMENT_COLOR)} 
            onDecrease={() => setColor('blue', INCREMENT_COLOR * -1)} 
            color="Blue"
        />

        <View style={{ height:150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />


    </View>
    
    );
}

const styles = StyleSheet.create({
    colorBox:{
        height: 150,
        width : 150,
        
    }
})

export default ColorChangeScreen;
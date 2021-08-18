import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {
    return (<View>
    {/*We can use and makeup any prop names like title */}    
        <ImageDetail title="Forest" img={require('../../assets/forest.jpg')} rate="9"/>
        <ImageDetail title="Beach" img={require('../../assets/beach.jpg')} rate="10"/>
        <ImageDetail title="Mountain" img={require('../../assets/mountain.jpg')} rate="100"/>
    </View>
    );
}

const styles = StyleSheet.create({

})

export default ImageScreen;
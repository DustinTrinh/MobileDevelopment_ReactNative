import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen = ({navigation}) => {
  //console.log(props)  to see all the properties whenever home screen is load
  return( 
  <View>
    <Text style={styles.text}>Just Testing</Text>
    <Button 
      
      onPress={()=> navigation.navigate("Components")}
      title="Go to Component Screen"
    />
    <Button 
      
      onPress={()=> navigation.navigate("List")}
      title="Go to List Demo"
    />
    <Button 
      onPress={()=> navigation.navigate("Image")}
      title="Go to Image Screen"
    />
    <Button 
      onPress={()=> navigation.navigate("Counter")}
      title="Go to Counter Application"
    />
    <Button 
      onPress={()=> navigation.navigate("Color")}
      title="Go to Random Color Application"
    />
    <Button 
      onPress={()=> navigation.navigate("ColorChange")}
      title="Go to Color Changing Application"
    />
    {/*
    <TouchableOpacity onPress={()=> navigation.navigate("")}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
    */}
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

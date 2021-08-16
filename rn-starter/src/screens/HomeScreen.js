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
    <TouchableOpacity onPress={()=> navigation.navigate("List")}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

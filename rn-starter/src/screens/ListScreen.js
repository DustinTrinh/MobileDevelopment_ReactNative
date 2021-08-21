import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    //Solving key issue by assigning unique keys for each entry
    /*
    const friends = [
        {name: 'Dustin', key: '1'},
        {name: 'Sherry', key: '2'},
        {name: 'Amber', key: '3'},
        {name: 'Razor', key: '4'},
        {name: 'QiQi', key: '5'},
        {name: 'Keen', key: '6'},
    ]
    */
    const friends = [
        {name: 'Dustin', Age: '23'},
        {name: 'Sherry', Age: '22'},
        {name: 'Amber', Age: '22'},
        {name: 'Razor',Age: '26'},
        {name: 'QiQi', Age: '1000'},
        {name: 'Keen', Age: '29'},
    ]

    return (
        <FlatList 
        //disable or enable to scroll horizontal
            horizontal = {false}
        //Disable horizontal scrollbar on android
            showsHorizontalScrollIndicator = {false}

        //Using keyExtractor to solve keys problem
            keyExtractor={dude => dude.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>Name: {item.name} - Age: {item.Age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
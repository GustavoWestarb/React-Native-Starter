import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'Friend #1', age: 20 },
        { name: 'Friend #2', age: 23 },
        { name: 'Friend #3', age: 34 },
        { name: 'Friend #4', age: 54 },
        { name: 'Friend #5', age: 12 },
        { name: 'Friend #6', age: 56 },
        { name: 'Friend #7', age: 23 },
        { name: 'Friend #8', age: 89 },
        { name: 'Friend #9', age: 20 },
    ];


    return (
        <FlatList 
            showsVerticalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                //element === { item: { name: 'Friend #1' }, index: 0}
                //item === { name: 'Friend #1' }
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen;
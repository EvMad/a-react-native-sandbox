import React from 'react';

import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';

const menuItemsToDisplay = [
    { name: "Hummus", id: '1A'},
    { name: "Moutabal", id: '2B'},
    { name: "Falafel", id: '3C'},
    { name: "Marinated Olives", id: '4D'},
    { name: "Eggplant Salad", id: '5E'},
    { name: "Kofta", id: '6F'},
    { name: "Lentil Burger", id: '7G'},
    { name: "Smoked Salmon", id: '8H'},
    { name: "Kofta Burger", id: '9I'},
    { name: "Turkish Kebab", id: '10J'},
    { name: "Fries", id: '11K'},
    { name: "Buttered Rice", id: '12L'},
    { name: "Bread Sticks", id: '13M'},
    { name: "Pita Pocket", id: '14N'},
    { name: "Lentil Soup", id: '15O'},
    { name: "Greek Salad", id: '16P'},
    { name: "Rice Pilaf", id: '17Q'},
    { name: "Baklava", id: '18R'},
    { name: "Tartufo", id: '19S'},
    { name: "Tiramisu", id: '20T'},
    { name: "Panna Cotta", id: '21U'},
];

const Item = ({name}) => {
    return (
        <View style={menuStyles.container}>
            <Text style={menuStyles.itemText}>{name}</Text>
        </View>
    )
}

const MenuItems = () => {

    const renderItem = ({ item }) => <Item name={item.name} />;

    return (
        <View style={menuStyles.container}>
           
                <Text style={menuStyles.headerText}>View Menu</Text>
                <FlatList data={menuItemsToDisplay} renderItem={renderItem}></FlatList>

        </View>
    );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.75
    },
    innerContainer: {
    padding: 40,
    backgroundColor: green
    },
    headerText: {
        fontSize: 40, 
        flexWrap: 'wrap', 
        color: 'white'
    },
    itemText: {
        fontSize: 24, 
        color: yellow 
    },
});
import React from 'react';

import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';

const menuItemsToDisplay = [
    { name: "Hummus", price: '$5.00', id: '1A'},
    { name: "Moutabal", price: '$5.00', id: '2B'},
    { name: "Falafel", price: '$7.50', id: '3C'},
    { name: "Marinated Olives", price: '$5.00', id: '4D'},
    { name: "Eggplant Salad", price: '$8.50', id: '5E'},
    { name: "Kofta", price: '$5.00', id: '6F'},
    { name: "Lentil Burger", price: '$10.00', id: '7G'},
    { name: "Smoked Salmon", price: '$14.00', id: '8H'},
    { name: "Kofta Burger", price: '$11.00', id: '9I'},
    { name: "Turkish Kebab", price: '$15.50', id: '10J'},
    { name: "Fries", price: '$3.00', id: '11K'},
    { name: "Buttered Rice", price: '$3.00', id: '12L'},
    { name: "Bread Sticks", price: '$3.00', id: '13M'},
    { name: "Pita Pocket", price: '$3.00', id: '14N'},
    { name: "Lentil Soup", price: '$3.75', id: '15O'},
    { name: "Greek Salad", price: '$6.00', id: '16P'},
    { name: "Rice Pilaf", price: '$4.00', id: '17Q'},
    { name: "Baklava", price: '$3.00', id: '18R'},
    { name: "Tartufo", price: '$3.00', id: '19S'},
    { name: "Tiramisu", price: '$5.00', id: '20T'},
    { name: "Panna Cotta", price: '$5.00', id: '21U'},
];

const Separator = () => <View style={menuStyles.separator} />;

const Item = ({ name, price }) => {
    return (
        <View style={menuStyles.innerContainer}>
            <Text style={menuStyles.itemText}>{name}</Text>
            <Text style={menuStyles.itemText}>{price}</Text>
        </View>
    );
};

const MenuItems = () => {

    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

    return (
        <View style={menuStyles.container}>
           
                <Text style={menuStyles.headerText}>View Menu</Text>
                <FlatList 
                data={menuItemsToDisplay}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}></FlatList>

        </View>
    );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.75,
        backgroundColor: '#333333',
    },
    innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: green
    },
    headerText: {
        fontSize: 40, 
        flexWrap: 'wrap', 
        color: 'white'
    },
    itemText: {
        fontSize: 24, 
        color: yellow,
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: '#EDEFEE',
    }
});
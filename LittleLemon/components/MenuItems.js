import React from 'react';

import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';

const menuItemsToDisplay = [
    { name: "Hummus", id: '0'},
    { name: "Moutabal", id: '1'},
    { name: "Falafel", id: '2'},
    { name: "Marinated Olives", id: '3'},
    { name: "Eggplant Salad", id: '4'},
    { name: "Kofta", id: '5'},
    { name: "Lentil Burger", id: '6'},
    { name: "Smoked Salmon", id: '7'},
    { name: "Kofta Burger", id: '8'},
    { name: "Turkish Kebab", id: '9'},
    { name: "Fries", id: '10'},
    { name: "Buttered Rice", id: '11'},
    { name: "Bread Sticks", id: '12'},
    { name: "Pita Pocket", id: '13'},
    { name: "Lentil Soup", id: '14'},
    { name: "Greek Salad", id: '15'},
    { name: "Rice Pilaf", id: '16'},
    { name: "Baklava", id: '17'},
    { name: "Tartufo", id: '18'},
    { name: "Tiramisu", id: '19'},
    { name: "Panna Cotta", id: '20'},
];

const Item = ({name}) => {
    return (
        <View style={menuStyles.container}>
            <Text style={menuStyles.itemText}>{name}</Text>
        </View>
    )
}

const MenuItems = () => {

    const renderItem = ({item}) => <Item name={item.name} />

    return (
        <View style={menuStyles.container}>
            <ScrollView 
            indicatorStyle={'white'}
              horizontal={false}  
               style={menuStyles.innerContainer}>
                <Text style={menuStyles.headerText}>View Menu</Text>
                <FlatList data={menuItemsToDisplay} renderItem={renderItem}></FlatList>
            </ScrollView>
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
import React from 'react';

import { View, Text, ScrollView, StyleSheet } from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';

const menuItemsToDisplay = [
    'Hummus \n Moutabal \n Falafel \n Marinated Olive \n Kafta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const MenuItems = () => {
    return (
        <View style={menuStyles.container}>
            <ScrollView 
            indicatorStyle={'white'}
              horizontal={false}  
               style={menuStyles.innerContainer}>
                <Text style={menuStyles.headerText}>View Menu</Text>
                <Text style={menuStyles.itemText}>{menuItemsToDisplay[0]}</Text>
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
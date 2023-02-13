import React from 'react';

import { View, Text, ScrollView } from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';

const menuItemsToDisplay = [
    'Hummus \n Moutabal \n Falafel \n Marinated Olive \n Kafta \n Eggplant Salad \n Lentil Burger',
];

const MenuItems = () => {
    return (
        <View>
            <ScrollView>
                <Text>View Menu</Text>
                <Text>{menuItemsToDisplay[0]}</Text>
            </ScrollView>
        </View>
    );
};

export default MenuItems;
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
    return (
      <View style={headerStyles.container}>
        <Text style={headerStyles.headerText}  numberOfLines={3}>Little Lemon</Text>
        </View>
    );
  }

  const headerStyles = StyleSheet.create({
    container: {
        flex: 0.1,
        backgroundColor: '#F4CE14',
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
  });
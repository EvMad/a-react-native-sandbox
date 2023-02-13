import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
    return (
      <View style={{ flex: 0.3, backgroundColor: '#F4CE14' }}>
        <Text style={{ padding: 40, fontSize: 30, color: 'black' }}  numberOfLines={3}>Welcome to
        <Text style={{ fontWeight: 'bold'}}>Little Lemon</Text>
        </Text>
        
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
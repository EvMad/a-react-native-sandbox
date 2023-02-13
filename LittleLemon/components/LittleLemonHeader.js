import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}  numberOfLines={3}>Little Lemon</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
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
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText} numberOfLines={3}>Little Lemon</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        backgroundColor: '#F4CE14',
        // backgroundColor: '#EE9972',
    },
    headerText: {
        paddingTop: 10,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
  });
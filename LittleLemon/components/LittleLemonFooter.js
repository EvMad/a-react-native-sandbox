import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>All rights reserved by Little Lemon, 2023</Text>
        
      </View>
    );
  }

  const styles = StyleSheet.create({

    footer: {
        // backgroundColor: '#F4CE14', 
        marginBottom: 10,
        backgroundColor: '#EE9972',
     
    },
    footerText: {
        fontSize: 18, 
        color: 'black', 
        textAlign: 'center'
    },
  

});
import * as React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    return (
        <ScrollView 
        indicatorStyle={"white"}
              horizontal={false}  
                style={styles.container}>
        <Text style={styles.headerText}>Welcome to Little Lemon
        </Text>
        <Text style={styles.bodyText}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        </ScrollView>
    );
  }

  const styles = StyleSheet.create({

      container: {
        flex: 1,
        padding: 40,
        backgroundColor: '#495E57',
       
      },
      headerText: {
        fontWeight: 'bold', 
        fontSize: 30, 
        color: 'white', 
        textAlign: 'center', 
        padding: 40,
      },
      bodyText: {
        fontSize: 24, 
        color: 'white', 
        textAlign: 'center', 
      },

  });
import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen() {
    return (
        <ScrollView 
        indicatorStyle={"white"}
              horizontal={false}  
                style={styles.container}>
                  <Image source={require("")} resizeMode="contain" style={styles.logo} accessible={true} accessibilityLabel="Little Lemon Logo" />
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
        backgroundColor: '#333333',
       
      },
      logo: {
        height: 100,
        width: 300,
      },
      image: {
        width: 350,
        height: 250,
        borderRadius: 10,
        borderWidth: 10,
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
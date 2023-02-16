import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, useColorScheme } from 'react-native';

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();
    return (
        <ScrollView 
        indicatorStyle={"white"}
              horizontal={false}  
                style={[styles.container, colorScheme === 'light' ? {backgroundColor: '#fff'} : {backgroundColor: '#333333'}]}>
                 <View style={styles.headerWrapper}>
                 <Image source={require("../img/LittleLemonLogo.png")} resizeMode="contain" style={styles.logo} accessible={true} accessibilityLabel="Little Lemon Logo" />
        <Text style={styles.headerText}>Little Lemon
        </Text>
                 </View>
        <Text style={styles.bodyText}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        </ScrollView>
    );
  }

  const styles = StyleSheet.create({

      container: {
        flex: 1,       
      },
      logo: {
        height: 100,
        width: 100,
        borderRadius: 20,
      },
      headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
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
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
      },
      bodyText: {
        fontSize: 24, 
        color: 'white', 
        textAlign: 'center', 
      },

  });
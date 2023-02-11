import * as React from 'react';
import { Text, View } from 'react-native';

export default function WelcomeScreen() {
    return (
      <View style={{ flex: 0.4, justifyContent: 'center' }}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>Welcome to Little Lemon
            <Text style={{ fontSize: 14, padding: 20 }}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        </Text>
      </View>
    );
  }
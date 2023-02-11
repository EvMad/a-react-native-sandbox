import * as React from 'react';
import { Text, View } from 'react-native';

export default function LittleLemonHeader() {
    return (
      <View style={{ flex: 0.2, justifyContent: "flex-start", backgroundColor: '#F4CE14' }}>
        <Text style={{ padding: 40, fontSize: 30, color: 'black' }}>Little Lemon Restaurant</Text>
        
      </View>
    );
  }
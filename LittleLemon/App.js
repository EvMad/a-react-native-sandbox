import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import MenuItems from "./components/MenuItems";
import FeedbackForm from "./components/FeedbackForm";
import WelcomeScreen from "./pages/WelcomeScreen";
import LoginScreen from "./pages/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
  <NavigationContainer>
 <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' } }}>
 <View style={styles.container}>
      <LittleLemonHeader />
      <Stack.Screen name="Welcome" options={{ title: 'Home' }} component={WelcomeScreen} />
      <Stack.Screen name="Menu" component={MenuItems} />
      <Stack.Screen name="Feedback" component={FeedbackForm} />
      <Stack.Screen name="Login" component={LoginScreen} />
      
      
    </View>
   
    <View style={styles.footer}>
     <LittleLemonFooter />
   </View>
 </Stack.Navigator>
  </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footer: {
    backgroundColor: '#333333',
  },
});


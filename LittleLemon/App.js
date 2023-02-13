import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import MenuItems from "./components/MenuItems";
import WelcomeScreen from "./pages/WelcomeScreen";

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <LittleLemonHeader />
      <WelcomeScreen />
      {/* <MenuItems /> */}
      
    </View>
   
    <View style={styles.footer}>
     <LittleLemonFooter />
   </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEFEE',
  },
  footer: {
    backgroundColor: '#333333',
  },
});


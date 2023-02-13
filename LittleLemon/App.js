import * as React from 'react';
import { View, Text } from 'react-native';
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import MenuItems from "./components/MenuItems";
import WelcomeScreen from "./pages/WelcomeScreen";

export default function App() {
  return (
    <>
    <View style={{flex: 1, backgroundColor: '#495E57'}}>
      <LittleLemonHeader />
      <WelcomeScreen />
      <MenuItems />
      
    </View>
   
    <View style={{ backgroundColor: '#495E57' }}>
     <LittleLemonFooter />
   </View>
    </>
  );
}



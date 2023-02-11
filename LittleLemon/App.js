import * as React from 'react';
import { View } from 'react-native';
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";

export default function App() {
  return (
    <>
        <View>
      <LittleLemonHeader />
    </View>
     <View>
     <LittleLemonFooter />
   </View>
    </>
  );
}



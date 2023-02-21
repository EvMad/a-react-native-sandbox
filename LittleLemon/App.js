import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Image } from 'react-native';
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import MenuItems from "./components/MenuItems";
import FeedbackForm from "./components/FeedbackForm";
import WelcomeScreen from "./pages/WelcomeScreen";
import LoginScreen from "./pages/LoginScreen";
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return <Image source={require('./img/LittleLemonLogo.png')} style={{
    height: 40,
    width: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
  }}
   />;
}

export default function App() {
  return (
    <>
  <NavigationContainer>
     <LittleLemonHeader />

<Tab.Navigator screenOptions={({ route }) => ({
  
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === 'Welcome') {
      iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
    } else if (route.name === 'Menu') {
      iconName = 'ios-list';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  })}>
  <Tab.Screen name="Welcome" component={WelcomeScreen} />
  <Tab.Screen name="Menu" component={MenuItems} />
</Tab.Navigator>


 {/* <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold', }, }}> */}
 {/* <View style={styles.container}> */}
     
      {/* <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Home', headerTitle: (props) => <LogoTitle {...props} />,}} />
      <Stack.Screen name="Menu" component={MenuItems} />
      <Stack.Screen name="Feedback" component={FeedbackForm} />
      <Stack.Screen name="Login" component={LoginScreen} /> */}
      
      
    {/* </View> */}
   
    {/* <View style={styles.footer}> */}
     {/* <LittleLemonFooter /> */}
   {/* </View> */}
 {/* </Stack.Navigator> */}
 <LittleLemonFooter />
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


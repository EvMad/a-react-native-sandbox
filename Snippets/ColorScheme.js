import { Text, View, ScrollView, StyleSheet, Image, useColorScheme, useWindowDimensions } from 'react-native';

const colorScheme = useColorScheme();

style={[styles.container, colorScheme === 'light' ? {backgroundColor: '#fff'} : {backgroundColor: '#333333'}]}
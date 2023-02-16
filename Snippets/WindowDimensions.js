import { Text, View, ScrollView, StyleSheet, Image, useColorScheme, useWindowDimensions } from 'react-native';

const {width, height, fontScale} = useWindowDimensions();

<Text style={styles.bodyText}>Height: {height}</Text>
<Text style={styles.bodyText}>Width: {width}</Text>
<Text style={styles.bodyText}>Font Scale: {fontScale}</Text>
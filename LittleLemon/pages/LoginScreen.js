import * as React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';


const LoginScreen = () => {
    const [userName, onChangeUserName] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>Login to continue </Text>
        <TextInput value={userName} onChangeText={onChangeUserName} style={styles.input} placeholder="username" />
        <TextInput value={password} onChangeText={onChangePassword} style={styles.input} placeholder="password" />
      </ScrollView>
    );
  }

  export default LoginScreen;
import * as React from 'react';
import { ScrollView, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';


const LoginScreen = () => {
    const [userName, onChangeUserName] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput value={userName} onChangeText={onChangeUserName} style={styles.input} placeholder="username" />
            <TextInput value={password} onChangeText={onChangePassword} style={styles.input} placeholder="password" />
        </ScrollView>
    </KeyboardAvoidingView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerText: {
      padding: 40,
      fontSize: 30,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    regularText: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
    },
  });

  export default LoginScreen;
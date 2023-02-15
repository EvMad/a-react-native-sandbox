import * as React from 'react';
import { ScrollView, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';


const LoginScreen = () => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput value={email} onChangeText={onChangeEmail} style={styles.input} placeholder="username" />
            <TextInput value={password} onChangeText={onChangePassword} style={styles.input} secureTextEntry={true} maxLength={25} placeholder="password" />
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#F4CE14',
    },
  });

  export default LoginScreen;
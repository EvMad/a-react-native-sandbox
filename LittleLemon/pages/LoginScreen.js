import * as React from 'react';
import { ScrollView, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Pressable } from 'react-native';


const LoginScreen = () => {
  const [showButton, setShowButton] = useState(false);
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput value={email} onChangeText={onChangeEmail} style={styles.input} keyboardType={'email-address'} placeholder="email" />
            <TextInput value={password} onChangeText={onChangePassword} style={styles.input} secureTextEntry={true} maxLength={25} keyboardType={'default'} placeholder="password" />
        <Pressable style={menuStyles.button} onPress={() => {setShowButton(!showButton)}}>
        <Text style={menuStyles.buttonText}>Login</Text>
        </Pressable>
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
    button: {
      fontSize: 22,
      padding: 10,
      marginVertical: 8,
      margin: 40,
      backgroundColor: '#EDEFEE',
      borderColor: '#EDEFEE',
      borderWidth: 2,
      borderRadius: 12,
  },
  buttonText: {
      color: '#333333',
      textAlign: 'center',
      fontSize: 32,
  },
  infoSection: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
      backgroundColor: '#495E57',
  },
});
  });

  export default LoginScreen;
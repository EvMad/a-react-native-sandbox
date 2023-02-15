import * as React from 'react';
import { View, StyleSheet, TextInput, ScrollView, Text, KeyboardAvoidingView, Platform } from 'react-native';

const FeedbackForm = () => {
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [phoneNumber, onChangePhoneNumber] = React.useState('');
    const [message, onChangeMessage] = React.useState('');

    return (
   <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
         <ScrollView keyboardDismissMode="on-drag">
            <Text style={styles.headingSection}>
                How was your visit to Little Lemon?
            </Text>
            <Text style={styles.infoSection}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear your experience with us!
            </Text>
            <TextInput value={firstName} onChangeText={onChangeFirstName} style={styles.input} placeholder={'First Name'} />
            <TextInput value={lastName} onChangeText={onChangeLastName} style={styles.input} placeholder={'Last Name'} />
            <TextInput value={phoneNumber} onChangeText={onChangePhoneNumber} style={styles.input} keyboardType={"phone-pad"} placeholder={'Phone Number'} />
            <TextInput value={message} onChangeText={onChangeMessage} style={styles.input} multiline={true} maxLength={250} placeholder={'Type your message here...'} />
        </ScrollView>
   </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495E57'
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
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F4CE14',
    },
    infoSection: {
        fontSize: 20,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
    headingSection: {
        fontSize: 28,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
});

export default FeedbackForm;
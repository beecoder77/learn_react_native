import React, { Component } from 'react';
import { Text, View , StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Profile from './profile';
import {createStackNavigator} from 'react-navigation';

class Login extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TextInput 
            placeholder="Username or Email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}></TextInput>
            <TextInput 
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="go"
            secureTextEntry
            style={styles.input}>
            ref={(input) => this.passwordInput = input}
            </TextInput>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Profile')}>
                <Text style={styles.textContainer}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const RootStack = createStackNavigator(
    {
        Login: Login,
        Profile: Profile,
    },
    {
        initialRouteName : 'Login',
    }
);

export default class App extends React.Component {
    render(){
        return <RootStack />;
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#fff',
        fontWeight: '700',
    },
    buttonContainer:{
        backgroundColor: 'blue',
        paddingVertical: 10.
    },
    textContainer:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
    },
});
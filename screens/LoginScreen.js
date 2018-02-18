import React, { Component } from 'react';
import { AsyncStorage, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

class LoginScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    
    componentDidMount(){
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if (value !== null) {
            this.props.navigation.navigate('MainScreen');
        }
    }

    render () {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <TextInput 
                        style={styles.textInput} placeholder='Username'
                        underlineColorAndroid='transparent'
                    />
                    <TextInput 
                        style={styles.textInput} placeholder='Password'
                        secureTextEntry={true} underlineColorAndroid='transparent'
                    />
                    <Button style={styles.button}
                        icon={{name: 'golf-course', size: 20}}
                        buttonStyle={{backgroundColor: '#868D86', width: 200}}
                        textStyle={{textAlign: 'center'}}
                        title={'Login'}
                        onPress={this.login}
                    />
                </View>
            </KeyboardAvoidingView> 
        );
    }

    login = () => {
        alert('This is when the login will take place.');
        this.props.navigation.navigate('MainScreen')
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 40,
        paddingRight: 40
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20
    }
});
import React, { Component } from 'react';
import { AsyncStorage, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { STATUS_BAR_HEIGHT } from '../constants';
import logo from '../assets/Ball-transparent.png';

class LoginScreen extends Component {
    static navigationOptions = () => ({
        title: 'My Golf App',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: '#868D86'
        },
        headerTitleStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: 'white',
            paddingRight: Platform.OS === 'android' ? 50 : 0,
            alignSelf:'center'

        },
        headerLeft: (
            <Image 
             source={logo}
             style={styles.imageStyle} 
            />
        )
    });
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
                        secureTextEntry={true}underlineColorAndroid='transparent'
                    />
                    <Button
                        icon={{name: 'golf-course', size: 20}}
                        buttonStyle={{backgroundColor: '#868D86', width: 200, marginTop: 20}}
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
    },
    imageStyle: {
        marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
        marginLeft: 10,
        width: 40,
        height: 40
    }
});

export default LoginScreen;

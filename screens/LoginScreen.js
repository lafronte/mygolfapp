import React, { Component } from 'react';
import { AsyncStorage, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
//import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { STATUS_BAR_HEIGHT } from '../constants';
import logo from '../assets/Ball-transparent.png';
import MainScreen from './MainScreen';


// Initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyCyBjifFcdfl51tksIw96-cped7sYQTbHw",
    authDomain: "mygolfapp-5710.firebaseapp.com",
    databaseURL: "https://mygolfapp-5710.firebaseio.com",
    projectId: "mygolfapp-5710",
    storageBucket: "mygolfapp-5710.appspot.com",
  }; 

firebase.initializeApp(firebaseConfig);


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
            email: '',
            password: '',
            error: '',
            loading: false
        }
    }

    signUp = (email,password) => {
        try{
            if (this.state.password.length < 6){
                alert("Please enter a password with at least 6 characters")
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email,password)
            console.log('Signed up')
        }
        catch(error){
            console.log(error.toString())
            alert("Unable to sign up!")
            return;
        }
    }

    login() {
            var that = this;
            firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
                .then( (user) => {
                    this.props.navigation.navigate('MainScreen')
                    console.log('logged in')
                })
                .catch(function (error) {
                    console.log(error.toString())
                });
    }

    render () {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <TextInput 
                        style={styles.textInput} placeholder='Email'
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={ ( email ) => this.setState({email}) }
                        underlineColorAndroid='transparent'    
                    />
                    <TextInput 
                        style={styles.textInput} placeholder='Password'
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={ ( password ) => this.setState({password}) }
                        secureTextEntry={true}underlineColorAndroid='transparent'
                    />
                    <Button
                        icon={{name: 'golf-course', size: 20}}
                        buttonStyle={{backgroundColor: '#868D86', width: 200, marginTop: 20}}
                        textStyle={{textAlign: 'center'}}
                        title={'Login'}
                        //onPress={() => this.login(this.state.email, this.state.password)}
                        onPress={this.login.bind(this)}
                    />
                    <Button
                        icon={{name: 'golf-course', size: 20}}
                        buttonStyle={{backgroundColor: '#868D86', width: 200, marginTop: 20}}
                        textStyle={{textAlign: 'center'}}
                        title={'Sign up'}
                        onPress={() => this.signUp(this.state.email, this.state.password)}
                    />
                </View>

            </KeyboardAvoidingView> 
        );
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

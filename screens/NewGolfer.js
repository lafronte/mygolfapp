import React, { Component } from 'react';
import { View, Platform, Image,  KeyboardAvoidingView, StyleSheet, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { STATUS_BAR_HEIGHT } from '../constants';
import logo from '../assets/Ball-transparent.png';

class NewGolfer extends Component {
    static navigationOptions = () => ({
        title: 'New Golfer',
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
            FirstName: '',
            LastName: '',
            Email: '',
            Handicap: '',
        }
    }

    render () {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <TextInput 
                        style={styles.textInput} placeholder='First Name'
                        underlineColorAndroid='transparent'
                    />
                    <TextInput 
                        style={styles.textInput} placeholder='Last Name'
                        underlineColorAndroid='transparent'
                    />
                    <TextInput 
                        style={styles.textInput} placeholder='Email'
                        underlineColorAndroid='transparent'
                    />
                    <TextInput 
                        style={styles.textInput} placeholder='Handicap'
                        underlineColorAndroid='transparent'
                    />
                    <Button
                        icon={{name: 'golf-course', size: 20}}
                        buttonStyle={{backgroundColor: '#868D86', width: 200, marginBottom: 10}}
                        textStyle={{textAlign: 'center'}}
                        title={'Save Golfer'}
                        onPress={this.save}
                    />
                    <Button 
                        icon={{name: 'home', size: 20}}
                        buttonStyle={{backgroundColor: '#868D86', width: 200}}
                        textStyle={{textAlign: 'center'}}
                        title={'Home'}
                        onPress={() => this.props.navigation.navigate('MainScreen')} 
                    />
                </View>
            </KeyboardAvoidingView> 
        );
    }
    save = () => {
        alert('This will put to database.');
    }
}

const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
});

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
    boxcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    box1: {
        backgroundColor: '#D4D7D7'
    },
    box2: {
        backgroundColor: '#7B7979'
    },
    // buttonStyle: { marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 20 },
    imageStyle: {
        marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
        marginLeft: 10,
        width: 40,
        height: 40
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 10
    }

});

export default NewGolfer;

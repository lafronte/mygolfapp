import React, { Component } from 'react';
import { View, Platform, Image, StyleSheet, Text } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import { Button } from 'react-native-elements';
import icon from '../assets/Ball-transparent.png';

class GolfersScreen extends Component {
    static navigationOptions = () => ({
        title: 'GolfersScreen',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: '#868D86'
        },
        headerTitleStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: 'white',
            paddingRight: Platform.OS === 'android' ? 50 : 0,
            alignSelf: 'center'
        },
        headerLeft: (
            <Image 
             source={icon}
             style={styles.imageStyle} 
            />
        )
    });
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.boxcontainer, styles.box1]}>
                    <Text>GolfersScreen</Text>
                </View>
                <View style={[styles.boxcontainer, styles.box2]}>
                <Button 
                    icon={{name: 'home', size: 20}}
                    buttonStyle={{backgroundColor: '#868D86', width: 200}}
                    textStyle={{textAlign: 'center'}}
                    title={'Home'}
                    onPress={() => this.props.navigation.navigate('MainScreen')} 
                />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        backgroundColor: '#D4D7D7'
    },   
    imageStyle: {
        marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
        marginLeft: 10,
        width: 40,
        height: 40
    },
    buttonStyle: {
        marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 20
    }

});

export default GolfersScreen;

import React, { Component } from 'react';
import { View, Platform, Image, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { STATUS_BAR_HEIGHT } from '../constants';
import logo from '../assets/Ball-transparent.png';

const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
});

class Leaderboard extends Component {
    static navigationOptions = () => ({
        title: 'Leaderboard',
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
             source={logo}
             style={styles.imageStyle} 
            />
        )
    });
    render () {
        return (
            <View style={styles.container}>
                <View style={[styles.boxcontainer, styles.box1]}>
                    <Text>Leaderboard</Text>
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
    }
    // buttonStyle: { marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 20 }

});

export default Leaderboard;

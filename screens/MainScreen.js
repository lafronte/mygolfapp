import React, { Component } from 'react';
import { View, Platform, Image, StyleSheet, Text } from 'react-native';
// import Expo from 'expo';
import { Button } from 'react-native-elements';
import { STATUS_BAR_HEIGHT } from '../constants';
import logo from '../assets/Ball-transparent.png';
import { MaterialIcons } from '@expo/vector-icons';
// import GolfersButton from '../components/golfersbutton';

/* cache Image */
const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
});

class MainScreen extends Component {
    static navigationOptions = () => ({
        title: 'MainScreen',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: '#868D86'
        },
        headerTitleStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: 'white',
            textAlign: 'center'
        },
        headerLeft: (
            <Image 
             source={logo}
             style={styles.imageStyle} 
            />
        )
    });

state = {
    appIsReady: false
}

componentWillMount() {
    this._loadAssetsAsync();
}

async _loadAssetsAsync() {
    const imageAssets = cacheImages([logo]);
    await Promise.all([...imageAssets]);
    this.setState({ appIsReady: true });
}

    render() {
        
        return (
            <View style={styles.container}>
                <View style={[styles.boxcontainer, styles.box1]}>
                    <Text>MyGolfApp</Text>
                </View>
                <View style={[styles.boxcontainer, styles.box2]}>
                    <Button 
                        // raised
                        icon={{name: 'golf-course', size: 20}}
                        buttonStyle={{backgroundColor: '#868D86', width: 200, margin: 10}}
                        textStyle={{textAlign: 'center'}}
                        title={'Golfers'}
                        onPress={() => this.props.navigation.navigate('GolfersScreen')} 
                    />
                     <Button 
                        // raised
                        icon={{name: 'golf-course', size: 20}}
                        buttonStyle={{backgroundColor: '#868D86', width: 200}}
                        textStyle={{textAlign: 'center'}}
                        title={'Leaderboard'}
                        onPress={() => this.props.navigation.navigate('Leaderboard')} 
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

export default MainScreen;

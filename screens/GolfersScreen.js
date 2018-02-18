import React, { Component } from 'react';
import { View, Platform, Image, StyleSheet } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
// import Expo from 'expo';
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
            color: 'white'
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
            <View style={{ backgroundColor: '#ddd' }}>
                <Button 
                    // raised
                    icon={{name: 'home', size: 20}}
                    buttonStyle={{backgroundColor: 'rgba(63, 191,127, 0.5)', borderRadius: 30, width: 150}}
                    textStyle={{textAlign: 'center'}}
                    title={'Home'}
                    onPress={() => this.props.navigation.navigate('MainScreen')} 
                />
             </View>
        );
    }
}

const styles = {
    imageStyle: {
        marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
        marginLeft: 10,
        width: 40,
        height: 40
    }

}

export default GolfersScreen;

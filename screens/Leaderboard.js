import React, { Component } from 'react';
import { View, Platform, Image, StyleSheet, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

class Leaderboard extends Component {
    render () {
        return (
            <View>
                <Text>This is the Leaderboard screen</Text>
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

export default Leaderboard;
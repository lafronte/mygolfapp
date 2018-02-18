import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { STATUS_BAR_HEIGHT } from '../constants';

class GolfersButton extends Component {
    render() {
        return (
            <View> 
                <Button 
                    raised
                    icon={{name: 'home', size: 32}}
                    buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={`Welcome to\nReact Native Elements`}
                    onPress={() => this.props.navigation.navigate('GolfersScreen')} 
                    // title="Go to the golfers screen" 
                />
            </View>
        );
    }
}

const styles = {
    buttonStyle: {
        marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 20,
    }
};

export default GolfersButton;

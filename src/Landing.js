import React from 'react';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';
import {Button} from 'native-base';

var myBackground = require('../assets/landing.jpg');

export default class Landing extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={myBackground}/>

                <View style={styles.viewStyle}>
                    <Text style={styles.titleStyle}>
                        Welcome to PokeSearch!
                    </Text>
                    <Button
                        block={true}
                        style={styles.buttonStyle}
                        onPress={() => this.props.switchScreen("search")}
                    >
                        <Text style={styles.buttonText}>Start Searching</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    viewStyle: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
    },
    titleStyle: {
        fontSize: 30,
        color: 'blue',
    },
    buttonStyle: {
        margin: 10,
    },
    buttonText: {
        color: 'white',
    },
});


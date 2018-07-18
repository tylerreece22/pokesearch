import React from 'react';
import {StyleSheet, Text, View, Platform, Image, ImageBackground} from 'react-native';
import {Button} from 'native-base';
import Landing from "./src/Landing";
import Search from "./src/Search";


export default class App extends React.Component {
    state = {
        currentScreen: "landing",
    }

    switchScreen = (currentScreen) => {
        this.setState({currentScreen});
    }

    renderScreen = () => {
        if(this.state.currentScreen === "landing"){
            return <Landing switchScreen={this.switchScreen}/>
        }
        else if (this.state.currentScreen === "search") {
            return <Search/>
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderScreen()}
            </View>
        );
    }
}

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Item, Input, Icon, Button, Text} from 'native-base';
import PokeLoader from "./PokeLoader";
import SearchBody from "./SearchBody";
import axios from 'axios';

export default class Landing extends React.Component {
    state = {
        pokeSearch: "",
        onCall: true,
        data: {},
    }
    searchPoke = () => {
        this.setState({onCall: true});
        if(this.state.pokeSearch === ""){
            return;
        }
        var self = this;
        axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase())
            .then(function(response){
                console.log(response.data);
                self.setState({data: response.data});
                self.setState({onCall: false});
            })
            .catch(function(error){
                console.log(error);
            });
    }

    renderBody = () => {
        if(this.state.onCall) {
            return <PokeLoader/>
        }
        else {
            return <SearchBody data={this.state.data}/>
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                searchBar
                rounded
                >
                    <Item>
                        {/*<Icon name="ios-search" onPress={this.searchPoke}/>*/}
                        <Input placeholder="Search"/>
                    </Item>
                    <Button transparent onPress={this.searchPoke}>
                        <Text>Search</Text>
                    </Button>
                </Header>
                {this.renderBody()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Dimensions, ImageBackground} from 'react-native';
import {ListItem, List} from 'native-base';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
var myBackground = require('../assets/raids_loading.png');

export default class SearchBody extends React.Component {
    render() {
        var pokemon = this.props.data;
        if (!pokemon) {
            return <View/>
        }
        return (
            <ImageBackground style={styles.backgroundImage}
                    source={{uri: myBackground}}>
                <ScrollView style={styles.container}>
                    <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                    <View style={styles.viewStyle}>
                        <Image source={{uri: pokemon.sprites.front_default}}
                               style={styles.img}
                        />
                    </View>
                    <View style={styles.info}>
                        <ListItem itemDivider>
                            <Text style={styles.listItem}>Size</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Weight - {pokemon.weight}kg</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Height - {pokemon.height / 10}m</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={styles.listItem}>Abilities</Text>
                        </ListItem>
                        <List
                            dataArray={pokemon.abilities}
                            renderRow={(item) =>
                                <ListItem>
                                    <Text>{item.ability.name}</Text>
                                </ListItem>

                            }
                        >
                        </List>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    img: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.8
    },
    listItem: {
        fontWeight: 'bold',
    },
    backgroundImage: {
        flex: 1,
        height: height,
        width: width,
    },
});

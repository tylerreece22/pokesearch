import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class PokeLoader extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"}}
                    style={styles.img}
                    >
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        height: 400,
        width: 400,
        justifyContent: 'center',
        alignItems: 'center',

    }
});

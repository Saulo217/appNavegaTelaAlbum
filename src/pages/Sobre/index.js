import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Menu } from '../../components/Menu';

export function Sobre() {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#000'}}>Sobre</Text>
            <Menu></Menu>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center'
    },
});
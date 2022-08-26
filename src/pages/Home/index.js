import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Menu } from '../../components/Menu';

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#000', alignItems: 'center', fontWeight: 'bold', paddingBottom: 50}}> Minas Gerais </Text>
            <Text style={{ color: '#000', alignItems: 'center', fontWeight: 'bold', paddingBottom: 50}}> Quantidade de Habitantes: 20,87 milhões </Text>
            <Text style={{ color: '#000', alignItems: 'center', fontWeight: 'bold', paddingBottom: 50}}> Área Territorial: 586.528 km²</Text>
            <Menu></Menu>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7991e",
        justifyContent: 'center',
        alignItems: 'center'
    },
});
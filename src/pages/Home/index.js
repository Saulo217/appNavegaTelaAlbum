import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Menu } from '../../components/Menu';

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#000'}}>
                Minas Gerais é o segundo estado mais populoso do Brasil.
                Concentra grandes áreas industriais e aglomerados urbanos, 
                além de ser importante na extração de recursos minerais.
            </Text>
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
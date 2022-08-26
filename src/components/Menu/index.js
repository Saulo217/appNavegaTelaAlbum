import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Link } from '@react-navigation/native';

export function Menu() {
    
    const [open, setOpen] = React.useState(false);

    function toogleMenu() {
        return open? setOpen(false) : setOpen(true);
    }

    function styleOpenMenu() { 
        return open? 'open': 'closedMenu';
    }

    function renderIcon(icon, color) {
        return (
            <View style={styles[styleOpenMenu()]}>
                <Ionicons onPress={() => toogleMenu()} name={`${icon}`} size={40} color={`${color}`}></Ionicons>
            </View>
        );
    }

    function renderClosedMenu() {
        return renderIcon('add', 'black');
    }

    function renderOpenMenu() {
        return (
            <View style={styles.openMenu}>
                <View style={{ flex: 2, flexDirection: 'column'}}>
                    <Link to={{ screen: 'Home' }} onPress={() => toogleMenu()} style={styles.text} children='Home'></Link>
                    <Link to={{ screen: 'Album' }} onPress={() => toogleMenu()} style={styles.text} children='Album'></Link>
                    <Link to={{ screen: 'Sobre' }} onPress={() => toogleMenu()} style={styles.text} children='Sobre'></Link>
                </View>
                {renderIcon('arrow-down', 'black')}
            </View>
        );
    }

    function isOpen() {
        return open? renderOpenMenu() : renderClosedMenu();
    }

    return isOpen();
}

const styles = StyleSheet.create({
    closedMenu: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 50,
        right: 30, bottom: 30,
        backgroundColor: "#f5f12a",
        justifyContent: 'center',
        alignItems: 'center',
    },
    openMenu: {
        position: 'absolute',
        width: 130,
        height: 145,
        backgroundColor: '#f5f12a',
        borderRadius: 10,
        right: 30, bottom: 30,
        flexDirection: 'column'
    },
    open: {
        position: 'absolute',
        borderRadius: 50,
        right: 10, bottom: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        left: 10,
        top: 10
    }
});
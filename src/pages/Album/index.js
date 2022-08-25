import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';

export function Album() {

    const carouselItens = [
        { title: 'foto1', image: 'https://wordpress-network.prod.aws.skyscnr.com/wp-content/uploads/2018/05/igreja-brasilia-brazil.jpg' },
        { title: 'foto2', image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2020/08/tiradentes-minas-gerais-capa2019-01.jpg' },
        { title: 'foto3', image: 'https://dsdsuzy1jtjfw.cloudfront.net/wp-content/uploads/2020/09/shutterstock_452390755-1024x683.jpg' }
    ];

    function renderItem({item}) {
        
        return (
            <View style={styles.carouselItemContainer}>
                
                <Text style={styles.carouselItemTitle}>{item.title}</Text>
                <Image style={styles.carouselItemImage} source={{ uri: `${item.image}` }}></Image>
            </View>
        );
    }

    return(
        <>
            <View>
                <Carousel
                    layout={'default'}
                    layoutCardOffset={10}
                    data={carouselItens}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={renderItem}
                >

                </Carousel>
            </View>

            <View>
                <Text>Álbum</Text>
                <FontAwesome5 name='cheese' size={80} color="#f5f12a"></FontAwesome5>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    carouselItemContainer: {
        backgroundColor: '#9e9e9d',
        borderRadius: 4,
        height: 300,
        padding: 10,
        marginTop: 20
    },
    carouselItemTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#FFF'
    },
    carouselItemImage: {
        width: '100%',
        height: 200,
        borderRadius: 4
    }
});
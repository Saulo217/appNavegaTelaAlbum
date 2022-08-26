import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';

export function Album() {

    const carouselItens = [
        { title: 'Belo Horizonte', image: 'https://content.skyscnr.com/m/36952f0d33b958e7/original/GettyImages-186133603.jpg?resize=1800px:1800px&quality=100' },
        { title: 'Tiradentes', image: 'https://content.skyscnr.com/m/678b5440f532af4c/original/Tiradentes-Pixabay.jpg?resize=1800px:1800px&quality=100' },
        { title: 'Monte Verde', image: 'https://content.skyscnr.com/m/764fea8b93e84334/original/Monte-Verde-Minas-Gerais-Ricardo-Cozo-Secult.JPG?resize=1800px:1800px&quality=100' },
        { title: 'São Thomé das Letras', image: 'https://content.skyscnr.com/m/26b3cae5dc1b7a57/original/Sao-Thome-das-Letras-Minas-Gerais.jpg?resize=1800px:1800px&quality=100'},
        { title: 'Serra do cipó', image: 'https://content.skyscnr.com/m/312a5955859d73b9/original/Santana-do-Riacho-Serra-do-Cipo-Minas-Gerais.jpg?resize=1800px:1800px&quality=100'}
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
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 50, backgroundColor: '#f7991e'}}>
                <View>
                    <Text>Cidades de Minas Gerais</Text>
                </View>
                <View>
                    <Carousel
                        layout={'default'}
                        layoutCardOffset={10}
                        data={carouselItens}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={renderItem}
                        style={{ paddingBottoms: 0}}
                    ></Carousel>
                    <View style={{alignSelf: 'center'}}>
                    <FontAwesome5 name='cheese' size={80} color="#f5f12a"></FontAwesome5>

                    </View>
                </View>
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
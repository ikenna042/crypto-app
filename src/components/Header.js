import React, {Component} from 'react';
import {View, Text, Stylesheet, Image, ScrollView} from 'react-native';

const Header = () => {
    return
    <View style={headerContainer}>
        <Text style={header}>
            Crypto App
        </Text>
    </View>
}

const styles = Stylesheet.create({
    headerContainer: {
        display: 'flex',
        marginTop: 55,
        alignItems: 'center'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

const {headerContainer, header} = styles;

export default Header;
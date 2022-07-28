import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { WARNA_UTAMA } from '../../utils/constant'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { New } from '../../components';
import Sementara from '../Sementara';

const Tab = createMaterialTopTabNavigator();

const Pesanan = () => {
    return (
        <View style={styles.page}>
            <View style={styles.hello}>
                <Text style={styles.heading}>Pesanan</Text>
                <Text style={styles.subHeading}>Tunggu makanan terbaik pilihan anda</Text>
            </View>
            <Tab.Navigator>
                <Tab.Screen name="Proses" component={New} />
                <Tab.Screen name="Sementara" component={Sementara} />
            </Tab.Navigator>
        </View>
    )
}

export default Pesanan

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
    hello: {
        marginTop: windowHeight * 0.025,
        marginHorizontal: 23,
        marginTop: 10,
    },
    heading: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        color: WARNA_UTAMA,
    },
    subHeading: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: '#757575',
        marginTop: -2,
    },
})

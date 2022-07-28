import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfilPicture2 } from '../../assets'
import { Akun, Gap } from '../../components'
import { WARNA_UTAMA } from '../../utils/constant'

const Tab = createMaterialTopTabNavigator();

const Profil = () => {
    return (
        <View style={styles.page}>
            <View style={styles.master}>
                <Image source={ProfilPicture2} />
            </View>
            <View style={styles.hello}>
                <Text style={styles.heading}>Fajar Nurhuda</Text>
                <Text style={styles.subHeading}>fajarhu@gmail.com</Text>
            </View>
            <Gap height={37} />
            <Tab.Navigator>
                <Tab.Screen name="Akun" component={Akun} />
                <Tab.Screen name="FoodyApp" component={Akun} />
            </Tab.Navigator>
        </View>
    )
}

export default Profil

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    master: {
        alignItems: 'center',
        marginTop: windowHeight * 0.07,
    },
    hello: {
        marginTop: windowHeight * 0.03,
        marginHorizontal: 23,
        alignItems: 'center',
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
        marginTop: 2,
    },
})

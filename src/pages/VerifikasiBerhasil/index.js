import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconVerified, Logo, VerifikasiBackground } from '../../assets'
import { WARNA_UTAMA } from '../../utils/constant'

const VerifikasiBerhasil = ({ navigation }) => {
    return (
        <ImageBackground source={VerifikasiBackground} style={styles.background}>
            <View style={styles.container}>
                <IconVerified />
                <Text style={styles.heading}>Selamat!!!</Text>
                <Text style={styles.text}>Nomor Ponsel Anda Berhasil Diverifikasi Sekarang Anda Dapat Terus Menggunakan Aplikasi</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainApp')}>
                    <Text style={styles.textButton}>Masuk</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default VerifikasiBerhasil

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginTop: 32,
        width: 93,
        height: 45,
    },
    container: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
        marginHorizontal: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
    heading: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
        marginHorizontal: 36,
    },
    button: {
        backgroundColor: WARNA_UTAMA,
        paddingVertical: 11,
        paddingHorizontal: 156,
        marginTop: 14,
        alignItems: 'center',
        borderRadius: 8,
    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
    },
})

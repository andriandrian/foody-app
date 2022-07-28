import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Illustration } from '../../assets'
import { WARNA_UTAMA } from '../../utils/constant'

const PesananBerhasil = ({ navigation }) => {
    return (
        <View>
            <View style={styles.images}>
                <Image source={Illustration} />
            </View>
            <View style={styles.hello}>
                <Text style={styles.heading}>Berhasil Membuat Pesanan</Text>
                <Text style={styles.subHeading}>Tunggu makanan terbaik pilihan anda</Text>
                <Text style={styles.subHeading}>menyiapkan makanan terbaik Anda</Text>
            </View>
            <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('MainApp')}>
                <Text style={styles.textBtn}>Pesan Makanan Lain</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Order')}>
                <Text style={styles.textBtn}>Lihat Pesanan Saya</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PesananBerhasil

const styles = StyleSheet.create({
    images: {
        alignItems: 'center',
        marginTop: 95,
    },
    hello: {
        alignItems: 'center',
        marginTop: 11.75,
    },
    heading: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: '#000000',
        marginBottom: 6,
    },
    subHeading: {
        fontSize: 13,
        fontFamily: 'Poppins-Light',
        color: '#757575',
        marginTop: 0,
    },
    btn1: {
        backgroundColor: WARNA_UTAMA,
        paddingVertical: 11,
        marginHorizontal: 23,
        marginTop: 26,
        alignItems: 'center',
        borderRadius: 8,
    },
    btn2: {
        backgroundColor: '#989898',
        paddingVertical: 11,
        marginHorizontal: 23,
        marginTop: 18,
        alignItems: 'center',
        borderRadius: 8,
    },
    textBtn: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
    },
})

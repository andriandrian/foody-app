import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconArrow } from '../../assets'

const Akun = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View style={styles.row}>
                <Text style={styles.text}>Edit Profil</Text>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfil')}>
                    <IconArrow />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Alamat Rumah</Text>
                <TouchableOpacity onPress={() => navigation.navigate('AlamatRumah')}>
                    <IconArrow />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Keamanan</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SistemKeamanan')}>
                    <IconArrow />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Pembayaran</Text>
                <TouchableOpacity onPress={() => navigation.navigate('PembayaranLast')}>
                    <IconArrow />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Akun

const styles = StyleSheet.create({
    page: {
        marginTop: 20,
        marginHorizontal: 23,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#000000',
    }
})

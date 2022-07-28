import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WARNA_UTAMA } from '../../utils/constant'
import { IconBCA, IconOVO } from '../../assets'
import Gap from '../Gap'

const PembayaranLast = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View style={styles.hello}>
                <Text style={styles.heading}>Pembayaran</Text>
            </View>

            <Text style={styles.heading2}>Detail Transaksi</Text>
            <View>
                <View style={styles.space}>
                    <Text style={styles.text1}>Pepes Tahu Tempe</Text>
                    <Text style={styles.text2}>Rp. 30.000</Text>
                </View>
                <View style={styles.space}>
                    <Text style={styles.text1}>Ongkos Kirim</Text>
                    <Text style={styles.text2}>Rp. 10.000</Text>
                </View>
                <View style={styles.space}>
                    <Text style={styles.text1}>Total Harga</Text>
                    <Text style={styles.text2}>Rp. 40.000</Text>
                </View>
            </View>

            <Gap height={29} />

            <Text style={styles.heading2}>Kirim Kepada</Text>
            <View>
                <View style={styles.space}>
                    <Text style={styles.text1}>Nama</Text>
                    <Text style={styles.text2}>Fajar Nurhuda</Text>
                </View>
                <View style={styles.space}>
                    <Text style={styles.text1}>Nomor HP</Text>
                    <Text style={styles.text2}>082284066470</Text>
                </View>
                <View style={styles.space}>
                    <Text style={styles.text1}>Alamat</Text>
                    <Text style={styles.text2}>Perum. Tiban Bertuah</Text>
                </View>
                <View style={styles.space}>
                    <Text style={styles.text1}>No Rumah</Text>
                    <Text style={styles.text2}>F 17</Text>
                </View>
                <View style={styles.space}>
                    <Text style={styles.text1}>Kota</Text>
                    <Text style={styles.text2}>Tiban Batam</Text>
                </View>
            </View>

            <Gap height={29} />

            <Text style={styles.heading2}>Metode Pembayaran</Text>
            <View>
                <View style={styles.space}>
                    <Text style={styles.text1}>Transfer</Text>
                </View>
                <View style={styles.space2}>
                    <IconBCA />
                    <Text style={styles.text3}>1651651351</Text>
                </View>
                <View style={styles.space2}>
                    <IconOVO />
                    <Text style={styles.text3}>5165152314</Text>
                </View>
                <View style={styles.space}>
                    <Text style={styles.text1}>Cash / Bayar ditempat</Text>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profil')}>
                    <Text style={styles.textButton}>Selesai</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PembayaranLast

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    hello: {
        marginTop: 13,
        marginHorizontal: 23,
    },
    heading: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        color: WARNA_UTAMA,
    },
    heading2: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginLeft: 23,
        marginTop: 7,
    },
    containerRow: {
        flexDirection: 'row',
        marginHorizontal: 23,
        marginTop: 5,
    },
    space: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 23,
    },
    space2: {
        flexDirection: 'row',
        marginHorizontal: 23,
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
        marginTop: 1,
        marginLeft: 17,
    },
    text1: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#8B8B8B',
    },
    text2: {
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        color: '#202020',
    },
    text3: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#8B8B8B',
        marginLeft: 56,
    },
    button: {
        backgroundColor: WARNA_UTAMA,
        paddingVertical: 12,
        marginHorizontal: 23,
        marginTop: 45,
        alignItems: 'center',
        borderRadius: 8,
    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 21,
    },
})

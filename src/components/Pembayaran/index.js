import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PepesTahuTempe } from '../../assets'
import { WARNA_UTAMA } from '../../utils/constant'
import Gap from '../Gap'

const Pembayaran = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View style={styles.hello}>
                <Text style={styles.heading}>Pembayaran</Text>
                <Text style={styles.subHeading}>Dapatkan makanan yang lebih baik</Text>
            </View>

            <Gap height={10} />

            <Text style={styles.heading2}>List Pesanan</Text>
            <View style={styles.containerRow}>
                <Image source={PepesTahuTempe} />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 17, marginTop: 10, }}>
                        <View>
                            <Text style={styles.text2}>Pepes Tahu Tempe</Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>3 Porsi</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, marginLeft: 17, marginTop: -5 }}>
                        <View>
                            <Text style={styles.text2}>Rp. 45.000</Text>
                        </View>
                    </View>
                </View>
            </View>

            <Gap height={29} />

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

            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PesananBerhasil')}>
                    <Text style={styles.textButton}>Selesaikan Transaksi</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Pembayaran

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    hello: {
        marginTop: 4,
        marginHorizontal: 23,
    },
    heading: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        color: WARNA_UTAMA,
    },
    subHeading: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: '#757575',
        marginTop: -1,
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
    button: {
        backgroundColor: WARNA_UTAMA,
        paddingVertical: 12,
        marginHorizontal: 23,
        marginTop: 26,
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

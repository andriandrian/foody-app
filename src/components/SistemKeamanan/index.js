import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WARNA_UTAMA } from '../../utils/constant'
import Gap from '../Gap'

const SistemKeamanan = () => {
    return (
        <View style={styles.page}>
            <View style={styles.hello}>
                <Text style={styles.heading}>Sistem Keamanan</Text>
            </View>
            <Gap height={25} />
            <View style={styles.container}>
                <Text style={styles.text1}>Password saat ini</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Masukkan Password saat ini'}
                    placeholderTextColor={'#272626'}
                    underlineColorAndroid='transparent'
                    secureTextEntry
                />
            </View>
            <View style={styles.botBorder}></View>
            <View style={styles.container}>
                <Text style={styles.text1}>Password Baru</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Masukkan Password Baru'}
                    placeholderTextColor={'#272626'}
                    underlineColorAndroid='transparent'
                    secureTextEntry
                />
            </View>
            <View style={styles.botBorder}></View>
            <View style={styles.container}>
                <Text style={styles.text1}>Konfirmasi Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Masukkan Konfirmasi Password'}
                    placeholderTextColor={'#272626'}
                    underlineColorAndroid='transparent'
                    secureTextEntry
                />
            </View>
            <View style={styles.botBorder}></View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Simpan</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default SistemKeamanan

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
    container: {
        marginHorizontal: 23,
        marginTop: 5,
        marginBottom: 10,
    },
    text1: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#757575',
        marginTop: 15,
    },
    botBorder: {
        borderBottomColor: '#000000',
        borderBottomWidth: 0.3,
        marginVertical: 0,
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
        // flex: 1,
        // justifyContent: 'flex-end',
        marginBottom: 21,
    },
})

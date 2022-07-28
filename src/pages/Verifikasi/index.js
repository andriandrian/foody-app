import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Logo } from '../../assets'
import { WARNA_UTAMA } from '../../utils/constant'

const Register = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View style={{ alignItems: 'center' }}>
                <Image source={Logo} style={styles.logo} />
            </View>
            <Text style={styles.heading}>Masukkan Verifikasi Kode Dikirim
            Ke Telepon Anda</Text>
            <Text style={styles.subHeading}>Kami Mengirimkannya Ke Nomor 081256******</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={'Masukkan Kode Verifikasi'}
                    placeholderTextColor={'#272626'}
                    underlineColorAndroid='transparent'
                />
            </View>
            {/* <Button
                style={styles.btnRegister}
                title="Buat Akun"
                color='#46600E'
                onPress={() => navigation.navigate('VerifikasiBerhasil')}
            /> */}
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.btnBuatAkun} onPress={() => navigation.navigate('VerifikasiBerhasil')}>
                    <Text style={styles.textBtn}>Buat Akun</Text>
                </TouchableOpacity>
                <View style={styles.loginContainer} onPress={() => this.props.navigation.navigate('MainApp')}>
                    <Text style={styles.textLogin}>Kirim Ulang Kode Dalam 00.50</Text>
                </View>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    logo: {
        marginTop: 38,
        width: 93,
        height: 45,
    },
    heading: {
        marginTop: 18,
        marginLeft: 23,
        marginRight: 67,
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
    },
    subHeading: {
        marginTop: -3,
        marginLeft: 23,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#000000',
        marginTop: -2,
    },
    inputContainer: {
        marginLeft: 23,
        marginTop: 12,
        marginRight: 23,
    },
    text: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    input: {
        borderColor: '#D6CDCD',
        borderWidth: 1,
        marginTop: 6,
        borderRadius: 8,
        paddingLeft: 16,
        paddingVertical: 12,
        fontSize: 10,
        fontFamily: 'Poppins-Light',
        color: 272626,
    },
    btnBuatAkun: {
        backgroundColor: WARNA_UTAMA,
        paddingVertical: 11,
        marginHorizontal: 23,
        marginTop: 36,
        alignItems: 'center',
        borderRadius: 8,
    },
    textBtn: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
    },
    loginContainer: {
        marginTop: 19,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textLogin: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: '#272626'
    },
    btnRegister: {
        marginHorizontal: 23,
        color: WARNA_UTAMA
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 21,
    },
})

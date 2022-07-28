import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Logo } from '../../assets'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constant'

const Login = ({ navigation }) => {
    return (
        <ScrollView style={styles.page}>
            <View style={{ alignItems: 'center' }}>
                <Image source={Logo} style={styles.logo} />
            </View>
            <Text style={styles.heading}>Selamat Datang!</Text>
            <Text style={styles.subHeading}>Silakan masuk untuk melanjutkan</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Username atau Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Masukkan Username atau Email'}
                    placeholderTextColor={'#272626'}
                    underlineColorAndroid='transparent'
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Masukkan Password'}
                    placeholderTextColor={'#272626'}
                    secureTextEntry
                    underlineColorAndroid='transparent'
                />
            </View>
            <TouchableOpacity style={styles.btnMasuk} onPress={() => navigation.navigate('MainApp')}>
                <Text style={styles.textBtn}>Masuk</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
                <Text style={styles.textLogin}>Atau</Text>
            </View>
            <TouchableOpacity style={styles.btnBuatAkun} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.textBtn}>Buat Akun</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Login

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
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
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
    btnMasuk: {
        backgroundColor: WARNA_UTAMA,
        paddingVertical: 11,
        marginHorizontal: 23,
        marginTop: 36,
        alignItems: 'center',
        borderRadius: 8,
    },
    btnBuatAkun: {
        backgroundColor: WARNA_SEKUNDER,
        paddingVertical: 11,
        marginHorizontal: 23,
        marginTop: 12,
        alignItems: 'center',
        borderRadius: 8,
    },
    textBtn: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
    },
    loginContainer: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textLogin: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: '#272626'
    },
    black: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: '#000000'
    },
})
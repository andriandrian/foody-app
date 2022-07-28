import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Logo } from '../../assets'
import { WARNA_UTAMA } from '../../utils/constant'

const Register = ({ navigation }) => {
    return (
        <ScrollView style={styles.page}>
            <View style={{ alignItems: 'center' }}>
                <Image source={Logo} style={styles.logo} />
            </View>
            <Text style={styles.heading}>Buat Akun</Text>
            <Text style={styles.subHeading}>Dapatkan makanan sehat anda</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Masukkan Username'}
                    placeholderTextColor={'#272626'}
                    underlineColorAndroid='transparent'
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Masukkan Email'}
                    placeholderTextColor={'#272626'}
                    underlineColorAndroid='transparent'
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>No. Handphone</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Masukkan No. Handphone'}
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
                    underlineColorAndroid='transparent'
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Konfirmasi Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Masukkan Konfirmasi Password'}
                    placeholderTextColor={'#272626'}
                    underlineColorAndroid='transparent'
                />
            </View>
            <TouchableOpacity style={styles.btnBuatAkun} onPress={() => navigation.navigate('Verifikasi')}>
                <Text style={styles.textBtn}>Buat Akun</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer} onPress={() => this.props.navigation.navigate('MainApp')}>
                <Text style={styles.textLogin}>Sudah memiliki akun? </Text>
                <Text style={styles.black}>Masuk</Text>
            </View>
            {/* <Button
                style={styles.btnRegister}
                title="Buat Akun"
                color='#46600E'
                onPress={() => navigation.navigate('Verifikasi')}
            /> */}
        </ScrollView>
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
    black: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: '#000000'
    },
    btnRegister: {
        marginHorizontal: 23,
        color: WARNA_UTAMA
    }
})

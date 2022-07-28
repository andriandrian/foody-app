import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { IconEdit, ProfilPicture2 } from '../../assets'
import { WARNA_UTAMA } from '../../utils/constant'
import Gap from '../Gap'

const EditProfil = () => {
    return (
        <View style={styles.page}>
            <View style={styles.hello}>
                <Text style={styles.heading}>Edit Profil</Text>
            </View>
            <View style={styles.master}>
                <Image source={ProfilPicture2} />
                <Text style={styles.subHeading}>Ganti Foto Profil</Text>
            </View>
            <Gap height={30} />
            <View style={styles.container}>
                <Text style={styles.text1}>Username</Text>
                <View style={styles.row}>
                    <Text style={styles.text2}>Fajar Nurhuda</Text>
                    <IconEdit />
                </View>
            </View>
            <View style={styles.botBorder}></View>
            <View style={styles.container}>
                <Text style={styles.text1}>Email</Text>
                <View style={styles.row}>
                    <Text style={styles.text2}>fajarhu@gmail.com</Text>
                    <IconEdit />
                </View>
            </View>
            <View style={styles.botBorder}></View>
            <View style={styles.container}>
                <Text style={styles.text1}>No. handphone</Text>
                <View style={styles.row}>
                    <Text style={styles.text2}>082284066470</Text>
                    <IconEdit />
                </View>
            </View>
        </View>
    )
}

export default EditProfil

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    subHeading: {
        fontSize: 11,
        fontFamily: 'Poppins-Medium',
        marginTop: 10,
    },
    master: {
        alignItems: 'center',
        marginTop: windowHeight * 0.07,
    },
    container: {
        marginHorizontal: 23,
        marginTop: 5,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text1: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#757575',
    },
    text2: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    botBorder: {
        borderBottomColor: '#000000',
        borderBottomWidth: 0.3,
        marginVertical: 0,
    }
})

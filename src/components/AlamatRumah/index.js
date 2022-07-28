import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconEdit } from '../../assets'
import { WARNA_UTAMA } from '../../utils/constant'
import Gap from '../Gap'

const AlamatRumah = () => {
    return (
        <View style={styles.page}>
            <View style={styles.hello}>
                <Text style={styles.heading}>Alamat Rumah</Text>
            </View>
            <Gap height={30} />
            <View style={styles.container}>
                <Text style={styles.text1}>Alamat Rumah</Text>
                <View style={styles.row}>
                    <Text style={styles.text2}>Perum.Tiban Bertuah </Text>
                    <IconEdit />
                </View>
            </View>
            <View style={styles.botBorder}></View>
            <View style={styles.container}>
                <Text style={styles.text1}>Nomor rumah</Text>
                <View style={styles.row}>
                    <Text style={styles.text2}>F 17</Text>
                    <IconEdit />
                </View>
            </View>
            <View style={styles.botBorder}></View>
            <View style={styles.container}>
                <Text style={styles.text1}>Kota</Text>
                <View style={styles.row}>
                    <Text style={styles.text2}>Tiban Batam</Text>
                    <IconEdit />
                </View>
            </View>
            <View style={styles.botBorder}></View>
        </View>
    )
}

export default AlamatRumah

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

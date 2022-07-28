import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconAdds, IconMinus, PepesTahuTempeFull } from '../../assets'
import { WARNA_UTAMA } from '../../utils/constant'

const FoodDetail = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View>
                <Image source={PepesTahuTempeFull} style={styles.image} />
            </View>
            <View style={styles.containerRow}>
                <Text style={styles.heading}>Pepes Tahu Tempe</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <IconMinus style={styles.marginLeft} />
                    </TouchableOpacity>
                    <Text style={styles.marginLeft}>3</Text>
                    <TouchableOpacity>
                        <IconAdds style={styles.marginLeft} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.subHeading}>Makanan khas Jawa yang dibungkus dengan daun pisang yang disukai oleh vegetarian dengan pola makan yang cukup tinggi serta mengutamakan diet yang sehat dan teratur.</Text>
            <View style={styles.bottomContainer}>
                <View style={styles.containerRow}>
                    <View>
                        <Text style={styles.text1}>Total Harga</Text>
                        <Text style={styles.text2}>Rp. 30.000</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pembayaran')}>
                        <Text style={styles.buttonText}>Pesan</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    image: {
        width: '100%',
        alignItems: 'center',
        borderBottomRightRadius: 15,
        justifyContent: 'center',
    },
    heading: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: '#4E4E4E',
    },
    subHeading: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#707070',
        marginTop: 27,
        marginHorizontal: 23,
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 23,
        marginTop: 24,
    },
    marginLeft: {
        marginLeft: 6,
    },
    text1: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#757575',
    },
    text2: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        color: '#000000',
        marginTop: 1,
    },
    button: {
        backgroundColor: WARNA_UTAMA,
        paddingVertical: 12,
        paddingHorizontal: 41,
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 19,
    },
})

import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { IconAdds, IconStar, PepesTahuTempe, SupKrimJagung } from '../../assets'

const New = ({ onPress, onLongPress, navigation }) => {
    return (
        <View>
            <View style={styles.container}>
                <Image source={PepesTahuTempe} />
                <View style={styles.keterangan}>
                    <View>
                        <Text style={styles.title}>Pepes Tahu Tempe</Text>
                        <Text style={styles.price}>Rp. 10.000</Text>
                    </View>
                    <View style={styles.icon}>
                        <View style={styles.rating}>
                            <IconStar />
                            <Text style={styles.ratingText}>4.5</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('FoodDetail')}
                            onLongPress={onLongPress}>
                            <IconAdds />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <Image source={SupKrimJagung} />
                <View style={styles.keterangan}>
                    <View>
                        <Text style={styles.title}>Sup Krim Jagung</Text>
                        <Text style={styles.price}>Rp. 12.000</Text>
                    </View>
                    <View style={styles.icon}>
                        <View style={styles.rating}>
                            <IconStar />
                            <Text style={styles.ratingText}>4.0</Text>
                        </View>
                        <TouchableOpacity
                            onPress={onPress}
                            onLongPress={onLongPress}>
                            <IconAdds />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <Image source={PepesTahuTempe} />
                <View style={styles.keterangan}>
                    <View>
                        <Text style={styles.title}>Pepes Tahu Tempe</Text>
                        <Text style={styles.price}>Rp. 10.000</Text>
                    </View>
                    <View style={styles.icon}>
                        <View style={styles.rating}>
                            <IconStar />
                            <Text style={styles.ratingText}>4.5</Text>
                        </View>
                        <TouchableOpacity
                            onPress={onPress}
                            onLongPress={onLongPress}>
                            <IconAdds />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default New

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 23,
        paddingVertical: 11,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#000000',
        borderBottomWidth: 0.3,
    },
    keterangan: {
        flex: 1,
        marginLeft: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
    },
    price: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
    },
    rating: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    ratingText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 7,
    },
    icon: {
        alignItems: 'center',
    }
})

import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Sementara = ({ navigation }) => {
    return (
        <View>
            <Button
                style={styles.btnRegister}
                title="Pesanan Berhasil"
                color='#46600E'
                onPress={() => navigation.navigate('PesananBerhasil')}
            />
            <Button
                style={styles.btnRegister}
                title="Food Detail"
                color='#46600E'
                onPress={() => navigation.navigate('FoodDetail')}
            />
            <Button
                style={styles.btnRegister}
                title="Pembayaran"
                color='#46600E'
                onPress={() => navigation.navigate('Pembayaran')}
            />
            <Button
                style={styles.btnRegister}
                title="Order"
                color='#46600E'
                onPress={() => navigation.navigate('Order')}
            />
            <Button
                style={styles.btnRegister}
                title="Verifikasi"
                color='#46600E'
                onPress={() => navigation.navigate('Verifikasi')}
            />
            <Button
                style={styles.btnRegister}
                title="VerifikasiBerhasil"
                color='#46600E'
                onPress={() => navigation.navigate('VerifikasiBerhasil')}
            />
            <Button
                style={styles.btnRegister}
                title="EditProfil"
                color='#46600E'
                onPress={() => navigation.navigate('EditProfil')}
            />
            <Button
                style={styles.btnRegister}
                title="AlamatRumah"
                color='#46600E'
                onPress={() => navigation.navigate('AlamatRumah')}
            />
            <Button
                style={styles.btnRegister}
                title="SistemKeamanan"
                color='#46600E'
                onPress={() => navigation.navigate('SistemKeamanan')}
            />
            <Button
                style={styles.btnRegister}
                title="PembayaranLast"
                color='#46600E'
                onPress={() => navigation.navigate('PembayaranLast')}
            />
        </View>
    )
}

export default Sementara

const styles = StyleSheet.create({})

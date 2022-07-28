import React from 'react'
import firebase from 'firebase'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Splash, Profil, Pesanan, Register, Verifikasi, VerifikasiBerhasil, Login } from '../pages'
import { AlaamtRumah, BottomNavigator, EditProfil, FoodDetail, Order, Pembayaran, PembayaranLast, PesananBerhasil, SistemKeamanan } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Pesanan" component={Pesanan} />
            <Tab.Screen name="Profil" component={Profil} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="PesananBerhasil" component={PesananBerhasil} options={{ headerShown: false }} />
            <Stack.Screen name="FoodDetail" component={FoodDetail} options={{ headerShown: false }} />
            <Stack.Screen name="Pembayaran" component={Pembayaran} options={{ headerShown: true }} />
            <Stack.Screen name="Order" component={Order} options={{ headerShown: true }} />
            <Stack.Screen name="Verifikasi" component={Verifikasi} options={{ headerShown: false }} />
            <Stack.Screen name="VerifikasiBerhasil" component={VerifikasiBerhasil} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfil" component={EditProfil} options={{ headerShown: true }} />
            <Stack.Screen name="AlamatRumah" component={AlaamtRumah} options={{ headerShown: true }} />
            <Stack.Screen name="SistemKeamanan" component={SistemKeamanan} options={{ headerShown: true }} />
            <Stack.Screen name="PembayaranLast" component={PembayaranLast} options={{ headerShown: true }} />
        </Stack.Navigator>
    )
}

var firebaseConfig = {
    apiKey: "AIzaSyC-MdVF6KSbsBa-yX3ca1YhuGYzzu7UVWA",
    authDomain: "myproject-a6c34.firebaseapp.com",
    projectId: "myproject-a6c34",
    storageBucket: "myproject-a6c34.appspot.com",
    messagingSenderId: "499518938990",
    appId: "1:499518938990:web:9cd2a72507793da1b16b7f",
    measurementId: "G-331QT1XSYM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default Router

const styles = StyleSheet.create({})

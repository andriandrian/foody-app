import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Recommended, New, Traditional, Western, Asian, Gap } from '../../components'

const Tab = createMaterialTopTabNavigator();
const FoodMenu = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="New" component={New} style={styles.tab} />
            <Tab.Screen name="Traditional" component={Traditional} />
            <Tab.Screen name="Western" component={Western} />
            <Tab.Screen name="Asian" component={Asian} />
        </Tab.Navigator>
    )
}

export default FoodMenu

const styles = StyleSheet.create({
    tab: {
        backgroundColor: 'black',
        fontFamily: 'Poppins-Bold',
    }
})

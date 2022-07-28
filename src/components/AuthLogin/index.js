import React, { Component } from 'react'
import firebase from 'firebase'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constant'

export class EmailAndPassword extends Component {
    state = {
        email: '',
        password: '',
        error: '',
    }

    login = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.onLoginSuccess)
            .catch(err => {
                this.setState({
                    error: err.message
                })
            })
    }
    register = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.signUpSuccess)
            .catch(err => {
                this.setState({
                    error: err.message
                })
            })
    }
    onLoginSuccess = () => {
        this.setState({
            error: '',
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Username atau Email</Text>
                    <TextInput
                        placeholder={'Masukkan Email Anda Disini'}
                        style={styles.input}
                        placeholderTextColor={'#272626'}
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Password</Text>
                    <TextInput
                        placeholder={'Masukkan Passowrd Anda Disini'}
                        style={styles.input}
                        placeholderTextColor={'#272626'}
                        underlineColorAndroid='transparent'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.error}>
                        {this.state.error}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.login}>
                    <Text style={styles.buttonText}>
                        Masuk
                    </Text>
                </TouchableOpacity>
                <Text style={styles.textLogin}>Atau</Text>
                <TouchableOpacity style={styles.buttonDaftar} onPress={this.register}>
                    <Text style={styles.buttonText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default EmailAndPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    inputContainer: {
        // marginLeft: 23,
        marginTop: 12,
        // marginRight: 23,
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
    text: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    textLogin: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: '#272626',
        alignSelf: 'center',
    },
    error: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
    },
    buttonContainer: {
        backgroundColor: WARNA_UTAMA,
        paddingVertical: 11,
        // marginHorizontal: 23,
        marginTop: 36,
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonDaftar: {
        backgroundColor: WARNA_SEKUNDER,
        paddingVertical: 11,
        // marginHorizontal: 23,
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
    }
})


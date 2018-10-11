/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Component/Judul';
import Gambar from './Component/Gambar';

export default class Profile extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Judul/>
      	<Text>Hallo, Selamat datang</Text>
      	<Text>Muhammad Salman Abid</Text>
      	<Text>XI RPL 2, Absensi 28</Text>
        <Gambar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});

import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { vw, vh } from 'react-native-expo-viewport-units';
import {LinearGradient} from 'expo-linear-gradient'

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background:{
        position: 'absolute',
        width: vw(100),
        height: vh(100),
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    logo:{
        width: vw(31.5),
        height: vh(30)
    }
})


export default splashScreen = function () {

  const Logo = 'https://w7.pngwing.com/pngs/182/887/png-transparent-sao-paulo-f-c-hd-logo.png'
  return (
    <View style={style.container}>
        <LinearGradient 
        colors={['#000000', '#262e45', '#000000']}
        style={style.background}
      />
        <Image style={style.logo}source={{uri:Logo}}
      />
    </View>
  );
};

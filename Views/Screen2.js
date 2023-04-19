import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const Screen2 = ({navigation}) => {

    const goToTime = () => {
        navigation.navigate('Home')
    }

    const goToStopwatch = () => {
        navigation.navigate('Stopwatch')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.number}>00
        <Text style={styles.small}>Hr</Text>
      </Text>

      <Text style={styles.number}>00
        <Text style={styles.small}>Min</Text>
      </Text>

      <Text style={styles.number}>00
        <Text style={styles.small}>Sec</Text>
      </Text>

      <View style={styles.startAndStopButtonContainer}>
        <TouchableOpacity style={[styles.startAndStopButton, {marginRight: 4}]}>
            <Text style={styles.startAndStopButtonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.startAndStopButton, { marginLeft: 4}]}>
            <Text style={styles.startAndStopButtonText}>Stop</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={goToTime} style={styles.button}>
            <Image style={styles.buttonImg} source={{uri: "https://img.icons8.com/ios/512/watches-front-view.png"}}/>
        </TouchableOpacity>

        <TouchableOpacity disabled={true} onPress={goToStopwatch} style={[styles.button, {backgroundColor: 'grey'}]}>
            <Image style={styles.buttonImg} source={{uri: "https://img.icons8.com/ios/512/stopwatch.png"}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#000',
        paddingTop: 20,
    },

    number: {
        color: '#fff',
        fontSize: 200,
        fontWeight: 'bold',
        lineHeight: 200,
        textAlign: 'center',
        height: 200,
    },

    small: {
        color: '#d3d3d3',
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 2,
        // textAlign: 'center',
        textTransform: 'uppercase'
    },

    startAndStopButtonContainer: {
        flex: 1,
        // backgroundColor: 'grey',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        marginTop: -40
    },

    startAndStopButton: {
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },

    startAndStopButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 2,
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },

    button: {
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
    },

    buttonImg: {
        width: 40,
        height: 40,
    },
});

export default Screen2;

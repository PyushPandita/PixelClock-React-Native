import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const Screen1 = ({navigation}) => {

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');
    const [maridian, setMaridian] = useState('AM');

    const getHour = () => {
        const date = new Date();
        const hour = date.getHours();
        {hour < 10 ? setHour('0' + hour) : setHour(hour)}
        // setHour(hour);
    }

    const getMinute = () => {
        const date = new Date();
        const minute = date.getMinutes();
        {minute < 10 ? setMinute('0' + minute) : setMinute(minute)}
        // setMinute(minute);
    }

    const getSecond = () => {
        const date = new Date();
        const second = date.getSeconds();
        {second < 10 ? setSecond('0' + second) : setSecond(second)}
        // setSecond(second);
    }

    const getMaridian = () => {
        const date = new Date();
        const maridian = date.getHours() >= 12 ? "PM" : "AM";
        setMaridian(maridian);
    }

    useEffect(() => {
        getHour();
        getMinute();
        getSecond();
        getMaridian();
    }, [])

    setInterval(() => {
        getHour();
        getMinute();
        getSecond();
    }, 1000)

    const goToTime = () => {
        navigation.navigate('Home')
    }

    const goToStopwatch = () => {
        navigation.navigate('Stopwatch')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.hours}>{hour}</Text>
      <Text style={styles.mintues}>{minute}</Text>
      <Text style={styles.seconds}>{second}</Text>
      <Text style={styles.maridian}>{maridian}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity disabled={true} onPress={goToTime} style={[styles.button, {backgroundColor: 'grey'}]}>
            <Image style={styles.buttonImg} source={{uri: "https://img.icons8.com/ios/512/watches-front-view.png"}}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToStopwatch} style={styles.button}>
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
        // margin: 5,
        paddingTop: 20,
    },

    hours: {
        color: '#fff',
        fontSize: 210,
        fontWeight: 'bold',
        lineHeight: 210,
        textAlign: 'center',
        height: 210,
    },

    mintues: {
        color: 'grey',
        fontSize: 210,
        fontWeight: 'bold',
        lineHeight: 210,
        textAlign: 'center',
        height: 210,
    },

    seconds: {
        color: '#fff',
        fontSize: 210,
        fontWeight: 'bold',
        lineHeight: 210,
        textAlign: 'center',
        height: 210,
    },

    maridian: {
        flex: 1,
        color: 'grey',
        fontSize: 100,
        fontWeight: 'bold',
        lineHeight: 100,
        textAlign: 'center',
        letterSpacing: 2,
        height: 100,
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

export default Screen1;

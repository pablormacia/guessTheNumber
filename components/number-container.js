import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    container:{

    },
    number: {
        fontSize:25,
        fontWeight: 'bold',
        paddingVertical: 10
    }
})

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    )

}


export default NumberContainer;
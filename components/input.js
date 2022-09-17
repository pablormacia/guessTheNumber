import React from "react";
import { TextInput, StyleSheet} from 'react-native';
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        marginVertical: 20
    }
})


const Input = ({style, ...props}) => {
    return(
        //Por qué que no toma styles.input? style= {{ ...styles.input, ...style}}
        <TextInput {...props} style={style} />
    )
}

export default Input;
import React, {useState} from "react";
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import Card from "../components/card";
import { colors } from "../constants/colors";
import Input from "../components/input";
import NumberContainer from "../components/number-container";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 20,
    },
    label: {
        fontSize: 14,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 5, 
    },
    inputContainer: {
        width: 320,
        maxWidth: '80%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    input: {
        width: '100%',
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        maxWidth: 70,
        fontSize: 25,
        paddingVertical: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '75%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    summaryContainer: {
        width: '80%',
        height: 150,
        justifyContent: 'center',
        marginHorizontal: 20,
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 20,
    },
    summaryText: {
        fontSize: 18
    },
    
});

const StartGameScreen = ({onStartGame}) => {
    const [number, setNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState(0)

    const onHandleChange = (text) => {
        setNumber(text.replace(/[^0-9]/g, ''));
    }

    const onReset = () => {
        setNumber('');
        setSelectedNumber('')
        Keyboard.dismiss()
    }

    const onConfirm = () => {
        const choosenNumber = parseInt(number,10);
        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) return; 
        setConfirmed(true);
        setSelectedNumber(choosenNumber);
        setNumber('');
    }   

    const onHandleStartGame = () => {
        onStartGame(selectedNumber);
        
    }

     const confirmedOutput = () => confirmed && (
        <Card style={styles.summaryContainer}>
            <Text style={styles.summaryText}>Tu selección:</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button
                title="Comenzar"
                onPress= {onHandleStartGame}
                color = {colors.primary}
            />
        </Card>
    )


    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.title}>Comenzar juego</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.label}>Elige un número:</Text>
                    <Input 
                        style={styles.input} 
                        keyboardType='numeric' 
                        maxLength={2}
                        selectionColor = {colors.primary}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text) => onHandleChange(text)}
                        value = {number}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Limpiar"
                            onPress={onReset}
                            color={colors.secondary}
                        />
                        <Button
                            title="Confirmar"
                            onPress={onConfirm}
                            color={colors.primary}
                        />
                    </View>
                </Card>
            {confirmedOutput()}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen;
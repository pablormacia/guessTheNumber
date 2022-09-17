import React, {useState} from "react";
import {View, Text, StyleSheet,Button} from 'react-native';
import NumberContainer from "../components/number-container";
import Card from "../components/card"
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems:'center'
    },
    card: {
        marginTop: 20,
        paddingVertical: 20,
        marginHorizontal:20,
        width:'80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer:{
        width: '75%',
        marginHorizontal:20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    }
});

const generateRandomNumberBetween = (min,max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random()*(max-min)+min);
    if(randomNumber===exclude){
        return generateRandomNumberBetween = (min,max, exclude);
    }else{
        return randomNumber;
    }
}

const GameScreen = ({selectedNumber}) =>{
    const [currentGuess,setCurrentGuess] = useState
    (generateRandomNumberBetween(1,100, selectedNumber))
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.title}>La suposición del oponente</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Menor" 
                        onPress={()=>null} 
                        color={colors.primary}
                        />
                    <Button 
                        title="Mayor" 
                        onPress={()=>null} 
                        color={colors.backgroundDark}
                        />
                </View>
            </Card>
        </View>
    )
}

export default GameScreen;
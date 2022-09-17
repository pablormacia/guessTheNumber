import React, {useState} from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './components/header';
import StartGameScreen from './screens/start-game';
import GameScreen from './screens/game';
import { colors } from './constants/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight
  }
});


export default function App() {
  const [userNumber,setUserNumber] = useState(0);
  const [loaded] = useFonts({
    'Work-sans' : require('./assets/fonts/WorkSans-Regular.ttf'),
    'Work-sans-bold' : require('./assets/fonts/WorkSans-Bold.ttf'),
    'Work-sans-light' : require('./assets/fonts/WorkSans-Light.ttf'),
    'Work-sans-italic' : require('./assets/fonts/WorkSans-Italic.ttf'),
  })

  const title = !userNumber ? 'Adivina un número' : 'Comienza el juego'
  
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  if(!loaded){
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.backgroundDark}/>
      </View>
    )
  }
  
  let content = <StartGameScreen onStartGame={onStartGame} />

  if(userNumber) {
    content = <GameScreen selectedNumber={userNumber} />
  }
  
  return (
    <View style={styles.container}>
      <Header title={title} />
      {content}
    </View>
  );
}

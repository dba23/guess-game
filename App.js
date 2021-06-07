import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./com/Header";
import StartGameScreen from "./screens//StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const newGameHandler = () => {
    setNumberOfRounds(0);
  };
  const startGmaeHandler = (SelctedNumber) => {
    setUserNumber(SelctedNumber);
  };
  const gameOverHandler = (numberOfRounds) => {
    setNumberOfRounds(numberOfRounds);
    setUserNumber(null);
  };

  let screen = <StartGameScreen startGame={startGmaeHandler} />;
  if (userNumber && numberOfRounds <= 0) {
    screen = (
      <GameScreen userChoise={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (numberOfRounds > 0) {
    screen = (
      <GameOverScreen
        rounds={numberOfRounds}
        userNumber={userNumber}
        newGame={newGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

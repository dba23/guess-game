import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import NumberCointiner from "../com/NumberCointiner";
import Card from "../com/Card";

const generateRandomBetween = (min, max, exculude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exculude) {
    return generateRandomBetween(min, max, exculude);
  } else {
    return rndNum;
  }
};
function GameScreen(props) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoise)
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [rounds, setRounds] = useState(0);

  const { userChoise, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === props.userChoise) {
      props.onGameOver(rounds);
    }
  }, [currentGuess, userChoise, onGameOver]);
  const nextGuessHandler = (dir) => {
    if (
      (dir === "lower" && currentGuess < props.userChoise) ||
      (dir === "greater" && currentGuess > props.userChoise)
    ) {
      alert("you are lieing");
      return;
    }
    if (dir === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextGuess = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setRounds((rounds) => rounds + 1);
  };
  0;
  return (
    <View style={styles.screen}>
      <Text> com guess is </Text>
      <NumberCointiner>{currentGuess}</NumberCointiner>
      <Card style={styles.btnContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, "lower")} />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, "greater")}
        />
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;

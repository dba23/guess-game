import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function GameOverScreen(props) {
  return (
    <View style={styles.gameOverStyle}>
      <Text> GAME OVER !!! </Text>
      <Text> I guess in {props.rounds} rounds your number </Text>
      <Text> the number was {props.userNumber} </Text>
      <Button
        title={"NEW GAME"}
        onPress={() => {
          props.newGame();
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  gameOverStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

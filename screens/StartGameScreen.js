import React, { useState } from "react";

import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../com/Card";
import Colors from "../Constes/Colors";
import Input from "../com/Input";
import NumberCointiner from "../com/NumberCointiner";
const StartGameScreen = (props) => {
  const [number, setNumber] = useState("");
  const [confrim, setConfrim] = useState(false);
  const [selecedNumber, setSelecedNumber] = useState();
  const inputHandler = (input) => {
    setNumber(input.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    setNumber("");
    setConfrim(false);
  };

  const confirmHandler = () => {
    let choseNum = parseInt(number);
    if (isNaN(choseNum) || choseNum <= 0 || choseNum > 99) {
      alert("this is not a vailid input", "Number mast be between 1 to 99", [
        { text: "Okay" },
      ]);

      return;
    } else {
      setConfrim(true);
      setSelecedNumber(parseInt(number));
      setNumber("");
      Keyboard.dismiss();
    }
  };
  let confrimOutput;
  if (confrim) {
    confrimOutput = (
      <Card
        style={{
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Text>you selecdet </Text>
        <NumberCointiner>{selecedNumber}</NumberCointiner>
        <Button
          title="START GAME"
          onPress={() => {
            console.log(selecedNumber, "start game screen");
            props.startGame(selecedNumber);
          }}
        />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>select a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            keyboardType="numeric"
            autoCorrect={false}
            maxLength={2}
            autoCapitalize="none"
            onChangeText={inputHandler}
            value={number}
          />
          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <Button
                title="Reset"
                onPress={resetHandler}
                color={Colors.secoundColor}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title="confirm"
                onPress={confirmHandler}
                color={Colors.mainColor}
              />
            </View>
          </View>
        </Card>
        {confrimOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  btn: {
    width: "40%",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  startGameStyle: {
    justifyContent: "space-around",
    alignItems: "center",
  },
});
export default StartGameScreen;

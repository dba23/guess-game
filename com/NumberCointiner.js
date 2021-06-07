import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../Constes/Colors";
function NumberCointiner(props) {
  return (
    <View style={styles.continer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  continer: {
    borderWidth: 2,
    borderColor: Colors.secoundColor,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.secoundColor,
    fontSize: 22,
  },
});
export default NumberCointiner;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../Constes/Colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.HeaderTitel}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.mainColor,
    justifyContent: "center",
    alignItems: "center",
  },
  HeaderTitel: {
    color: "black",
    fontSize: 24,
  },
});

export default Header;

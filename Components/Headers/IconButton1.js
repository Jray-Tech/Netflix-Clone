import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomTextNoto from "../Text/CustomTextNoto";
import Colors from "../../Constants/Colors";
import { AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

export default function IconButton1(props) {
  return (
    <TouchableOpacity onPress={() => props.pressed()}>
      <View
        style={{
          ...styles.container,
          ...props.styles,
        }}
      >
        <AntDesign
          name={props.name}
          size={props.size || 24}
          color={props.color || "#f5f5f5"}
        />
        <CustomTextNoto
        style={styles.textStyle}
        >{props.text}</CustomTextNoto>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 12,
    color: "white",

  },
});

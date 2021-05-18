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
const { width, height } = Dimensions.get("window");

export default function HeaderTextButtons(props) {
  return (
    <TouchableOpacity onPress={() => props.pressed()}>
      <View
        style={{
          ...styles.container,
          ...props.styles,
        }}
      >
        <CustomTextNoto
          style={{
            ...styles.textStyle,
            ...props.textStyle,
          }}
        >
          {props.children}
        </CustomTextNoto>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textStyle: {
    fontSize: 15,
    color: "white",
  },
});

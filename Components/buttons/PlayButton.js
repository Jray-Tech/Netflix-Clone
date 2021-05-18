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
import { AntDesign, Entypo } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

export default function PlayButton(props) {
  return (
    <TouchableOpacity onPress={() => props.pressed()}>
      <View
        style={{
          ...styles.container,
          ...props.styles,
        }}
      >
        <Entypo
          name={props.name}
          size={props.size || 30}
          color={props.color || "black"}
        />
        <CustomTextNoto
        style={styles.textStyle}
        font='bold'
        >{props.text}</CustomTextNoto>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  textStyle: {
    fontSize: 16,
    color: "black",
  },
});

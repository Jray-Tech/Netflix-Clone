import React, { useState, useEffect } from "react";
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
import ImageLiisting from "./ImageLiisting";
const { width, height } = Dimensions.get("window");

export default function Listings(props) {
  return (
    <View style={styles.container}>
      <CustomTextNoto style={styles.titleText} font="bold">
        {props.title}
      </CustomTextNoto>
      <ScrollView horizontal={true}>
        {props.imagesSource.map((imageSource) => (
          <ImageLiisting imageSource={imageSource} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  titleText: {
    fontSize: 18,
    color: "white",
  },
});
// LEFT TO LEATRN
// useContext 
// useReducer 
// useEffect 
// customHok
// useState? ?? 

const placeHolder = (value) => {
    return value * 10;
};
let v = placeHolder(20);; 
let str = 'apart from cloths and placeds is like pakistan '
let animal = str + v 

// my grandpa had to sqy 
// Here is whatr

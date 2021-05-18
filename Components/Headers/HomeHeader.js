import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomTextNoto from "../Text/CustomTextNoto";
import Colors from "../../Constants/Colors";
import HeaderTextButtons from "./HeaderTextButtons";
const { width, height } = Dimensions.get("window");

// Confirm wprking of the comp
//  Make comp to contact with the api
// Finally, In terface with the ??? ..... Working directory !!!
//
export default function HomeHeader(props) {
  return (
    <View style={{
      ...styles.mainContainer, backgroundColor: props.transparent ? 'transparent' : 'black'
    }}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/img/icons/netflix.png")}
          style={styles.logoStyle}
          resizeMode="center"
        />
      </View>
      <View style={styles.navContainer}>
        <HeaderTextButtons
        pressed={() => console.log('Pipe is good stuff!!!')}
        >TV Shows</HeaderTextButtons>
        <HeaderTextButtons>Movies </HeaderTextButtons>
        <HeaderTextButtons>My List</HeaderTextButtons>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginTop: 20,
    padding: 10,
    zIndex: 5,
    justifyContent: "center",
    position: 'absolute'
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  logoStyle: {
    height: 40,
    width: 40,
  },
  navContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textStyle: {
    fontSize: 18,
    color: "white",
  },
});

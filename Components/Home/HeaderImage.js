import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomTextNoto from "../Text/CustomTextNoto";
import Colors from "../../Constants/Colors";
import HomeHeader from "../Headers/HomeHeader";
import IconButton1 from "../Headers/IconButton1";
import PlayButton from "../buttons/PlayButton";

const { width, height } = Dimensions.get("window");
// Recives image source and the text for movies to be shown as main films and all
// Leggo!!
export default function HeaderImage() {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        source={require("../../assets/img/movies/supernatural.jpg")}
        style={styles.mainImageStyle}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,    0.5    )        ", "transparent"]}
          style={styles.topGradient}
        ></LinearGradient>
        {/* <HomeHeader /> */}
        <View style={styles.textBox}>
          <CustomTextNoto font="bold" style={styles.textStyle}>
            Supernatural
          </CustomTextNoto>
          <CustomTextNoto style={styles.bottomText}
          font='bold'
          >
            #1 in TV Shows Today!
          </CustomTextNoto>
          {
            // Now come to add the lasty code which is ... buttons.
          }
          <View style={styles.bottonButtonsContainer}>
            <IconButton1 name="plus" text="My List" />
            <PlayButton
            text='Play'
            name='controller-play'
            />

            <IconButton1 name="infocirlceo" text="info" />
          </View>
        </View>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0, 0.95)"]}
          style={styles.bottomGradient}
        ></LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height * 0.7,
  },
  mainImageStyle: {
    height: height * 0.7,
    flex: 1,
  },
  topGradient: {
    height: height * 0.5,
    width: "100%",
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  bottomGradient: {
    height: height * 0.6 ,
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  textStyle: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
    padding: 10,
  },
  textBox: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    zIndex: 5,
    position: 'relative',
    bottom: height  * 0.05,
  },
  bottomText: {
    color: "white",
    fontSize: 14,
    padding: 10,
  },
  bottonButtonsContainer: {
    flexDirection: "row",
    width: width * 0.7,
    justifyContent: 'space-between',
     alignItems: 'center',
  },
});

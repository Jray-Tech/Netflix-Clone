import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");

export default function ImageLiisting(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageStyle}
        source={props.imageSource}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginTop: 5,
    marginBottom: 10,
    height: height * 0.2,
    width: height * 0.15,
  },
  imageStyle: {
    height: height * 0.2,
    width: height * 0.15,
  },
});

import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  Dimensions,
  ScrollView,
  ImageBackground,
  BackHandler,
} from "react-native";
import Colors from "../../Constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import HeaderImage from "../../Components/Home/HeaderImage";
import Listings from "../../Components/Home/Listings";
import HomeHeader from "../../Components/Headers/HomeHeader";

// Getting the dimensions of thwe app
const { width, height } = Dimensions.get("window");
export default function HomeScreen() {
  // Get positio for scroollview ...
  const [filmTags, setFilmTags] = useState([
    {
      title: "Popular On Netflix",
      images: [
        require("../../assets/img/movies/you4.jpg"),
        require("../../assets/img/movies/peak.jpg"),
        require("../../assets/img/movies/you2.jpg"),
        require("../../assets/img/movies/you3.jpg"),
        require("../../assets/img/movies/you.jpg"),
      ],
    },
    {
      title: "TV Drama Starting Women",
      images: [
        require("../../assets/img/movies/peak1.jpg"),
        require("../../assets/img/movies/you1.jpg"),
        require("../../assets/img/movies/peak2.jpg"),
        require("../../assets/img/movies/wanda.jpg"),
        require("../../assets/img/movies/you.jpg"),
      ],
    },
    {
      title: "Funny TV Shows",
      images: [
        require("../../assets/img/movies/wanda1.jpg"),
        require("../../assets/img/movies/wanda2.jpg"),
        require("../../assets/img/movies/wanda3.jpg"),
        require("../../assets/img/movies/wanda4.jpg"),
        require("../../assets/img/movies/you.jpg"),
      ],
    },
    {
      title: "Marvel Shows",
      images: [
        require("../../assets/img/movies/you.jpg"),
        require("../../assets/img/movies/wanda.jpg"),
        require("../../assets/img/movies/peak.jpg"),
        require("../../assets/img/movies/peak2.jpg"),
        require("../../assets/img/movies/you.jpg"),
      ],
    },
    {
      title: "Disney Shows",
      images: [
        require("../../assets/img/movies/you.jpg"),
        require("../../assets/img/movies/wanda.jpg"),
        require("../../assets/img/movies/peak.jpg"),
        require("../../assets/img/movies/peak2.jpg"),
        require("../../assets/img/movies/you.jpg"),
      ],
    },
  ]);
  // Detecting weather or not the scrolling has gotten to a paticlar point
  // If it has, then we make the navigation bar not visibleÐ
  const [isNavTransparent, setIsNavTransparent] = useState(true);
  const handleScroll = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    if (yOffset >= 100) {
      setIsNavTransparent(false);
    } else if (yOffset < 100) {
      setIsNavTransparent(true);
    }
  };
  return (
    <View
      style={{
        backgroundColor: "black",
      }}
    >
      <HomeHeader transparent={isNavTransparent} />
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
        <View style={styles.container}>
          <StatusBar translucent={true} backgroundColor={isNavTransparent ? 'transparent' : 'black'} />
          <HeaderImage />
          <View
            style={{
              position: "relative",
              bottom: height * 0.02,
            }}
          >
            <ScrollView>
              {filmTags.map((filmTag) => (
                <Listings title={filmTag.title} imagesSource={filmTag.images} />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import CustomTextNoto from "./Components/Text/CustomTextNoto";

// First code the splash screen load assets and images.
// Finally,

export default function App() {
  const [count, setCount] = useState(10);
  // Initailize the app as not ready so we can know when to render the app and close the splash scren
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Async function to prepare the app and load fonts and images.
    //
    const prepareApp = async () => {
      try {
        // Load up the splashscreen
        await SplashScreen.preventAutoHideAsync();
        // Load fonts, and images
        await loadFonts();
        await looadImages();
      } catch (e) {
        console.log("error occured!");
        console.warn(e);
      } finally {
        setAppReady(true);
        await SplashScreen.hideAsync();
      }
    };
    prepareApp();
  }, []);
  const loadFonts = async () => {
    const fonts = {
      NBold: require("./assets/fonts/NotoSans-Bold.ttf"),
      NboldItalic: require("./assets/fonts/NotoSans-BoldItalic.ttf"),
      NItalic: require("./assets/fonts/NotoSans-Italic.ttf"),
      NRegular: require("./assets/fonts/NotoSans-Regular.ttf"),
    };
    await Font.loadAsync(fonts);
  };
  const looadImages = async () => {
    console.log("images loaded ");
  };

  if (!appReady) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text> Your Code {count} </Text>
        <StatusBar style="auto" />
        <Button
          title="Ayomide"
          onPress={() => {
            console.log("pressed oooooo");
            setCount((prev) => prev * 2);
          }}
        />
        <CustomTextNoto
        font='bold'
        >
          Hey guys
        </CustomTextNoto>
        <Text>
          Hey guys
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

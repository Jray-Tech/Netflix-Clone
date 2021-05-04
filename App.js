import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import CustomTextNoto from "./Components/Text/CustomTextNoto";
import { NavigationContainer } from "@react-navigation/native";
import { Asset } from "expo-asset";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/tabscreens/Home";
import MoreScreen from "./screens/tabscreens/More";
import DownloadsScreen from "./screens/tabscreens/Downloads";
import ComingSoonScreen from "./screens/tabscreens/ComingSoon";
import SearchScreen from "./screens/tabscreens/Search";
import Colors from "./Constants/Colors";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

// Setting up the navigation ....
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Function for all the tabs in the app.
// The tab is passed to the main naviogatuion consumer in the main App function
function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      // Using custom colors so it can easily be updated with useContext later
      backgroundColor={Colors.darkGrey}

      tabBarOptions={{
        activeTintColor: Colors.white,
        inactiveTintColor: "grey",
        backgroundColor: Colors.darkGrey,
        activeBackgroundColor: Colors.darkGrey,
        inactiveBackgroundColor: Colors.darkGrey,
        style: styles.tabBarStyles
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => {
            let color = focused ? Colors.white : "grey";
            return <Entypo name="home" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused }) => {
            let color = focused ? Colors.white : "grey";
            return <Entypo name="bar-graph" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ focused }) => {
            let color = focused ? Colors.white : "grey";
            return <Entypo name="bar-graph" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={DownloadsScreen}
        options={{
          tabBarLabel: "Downloads",
          tabBarIcon: ({ focused }) => {
            let color = focused ? Colors.white : "grey";
            return <Entypo name="bar-graph" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="ComingSoon"
        component={ComingSoonScreen}
        options={{
          tabBarLabel: "Coming Soon",
          tabBarIcon: ({ focused }) => {
            let color = focused ? Colors.white : "grey";
            return <Entypo name="bar-graph" size={24} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

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
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // gestureEnabled: true,
            // gestureDirection: "horizontal",
            // ...TransitionPresets.SlideFromRightIOS,
            // transitionSpec: {
            //   open: config,
            //   close: closeConfig,
            // },
          }}
        >
          <Stack.Screen name="Home" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
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
  tabBarStyles:{
    borderTopWidth: 0,
  
  }
});

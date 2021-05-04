import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Button, StatusBar, BackgroundImage } from "react-native";
import Colors from "../../Constants/Colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor='transparent'
      />
      <Text>Hello Home Is WHere you are!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

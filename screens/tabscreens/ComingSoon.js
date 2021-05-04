import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ComingSoon() {
  return (
    <View style={styles.container}>
      <Text>Coming Soon Home Is WHere you are!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

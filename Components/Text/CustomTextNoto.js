import React, { Component, useState, useEffect } from "react";
import { View, Text } from "react-native";
// Allows app to use a custom font,.

export default function CustomTextNoto(props) {
  const [font, setFont] = useState(null);
  // Gettinmg and seting the font based on the params given when this component is called
  useEffect(() => {
    const font_type = setFontType(props.font ? props.font : "NRegular");
    setFont(font_type);
  }, []);
  // Using a switch statement for ease of use. 
  const setFontType = (type) => {
    switch (type) {
      case "bold":
        return "NBold";
      case "bold-italic":
        return "NboldItalic";
      case "italic":
        return "NItalic";
      default:
        return "NRegular";
    }
  };
  if (font) {
    return (
      <Text
        style={{
          ...props.style,
          fontFamily: font,
        }}
      >
        {props.children}
      </Text>
    );
  } else {
    return null;
  }
}

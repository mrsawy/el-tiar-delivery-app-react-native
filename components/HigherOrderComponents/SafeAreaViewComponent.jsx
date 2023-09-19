import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const SafeAreaViewComponent = ({ children }) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={`dark-content`} />
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaViewComponent;

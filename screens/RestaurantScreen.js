import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SafeAreaViewComponent from "../components/HigherOrderComponents/SafeAreaViewComponent";

const RestaurantScreen = () => {
  return (
    <SafeAreaViewComponent>
      {/* <View> */}
      <Text>RestaurantScreen </Text>
      {/* </View> */}
      {/* </SafeAreaView> */}
    </SafeAreaViewComponent>
  );
};

export default RestaurantScreen;

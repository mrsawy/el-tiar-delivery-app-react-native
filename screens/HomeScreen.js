import { View, Text, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SafeAreaViewComponent from "../components/HigherOrderComponents/SafeAreaViewComponent";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme/index";
import Categories from "../components/Categories";
import { featured } from "../constants";
import FeaturedRow from "../components/FeaturedRow";
// themeColors
const HomeScreen = () => {
  return (
    <SafeAreaViewComponent>
      <View>
        {/* search bar */}
        <View className=" flex flex-row items-center space-x-2 mx-1 content-center justify-center">
          <View className="flex flex-row flex-1 items-center justify-center border rounded-full border-gray-400 p-4 mt-3">
            <Icon.Search height="26" width="26" stroke="gray" />
            <TextInput placeholder="search" className="ml-2 flex-1 text-cyan-800 text-l " />
            <View className="flex-row border-0 border-l-2 border-gray-400 pl-2">
              <Icon.MapPin height="20" width="20" stroke="gray" />
              <Text> Cairo, Egypt </Text>
            </View>
          </View>
          <View
            className="rounded-full p-3 mt-2 "
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <Icon.Sliders height="20" width="20" stroke="white" />
          </View>
        </View>
        {/* categories */}
        <Categories />
        {/* features */}
        <View className="mt-5">
          {[featured, featured, featured].map((featured, index) => {
            return (
              <FeaturedRow
                key={index}
                title={featured.title}
                description={featured.description}
                restaurants={featured.restaurants}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaViewComponent>
  );
};

export default HomeScreen;

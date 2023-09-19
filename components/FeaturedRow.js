import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, restaurants, description }) => {
  return (
    <View className="flex-column space-y-5">
      <View className="flex flex-row justify-between px-5">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-md">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }}>See All</Text>
        </TouchableOpacity>
      </View>
      {/* Restaurants */}
      <ScrollView horizontal className="overflow-visible px-5 pb-5"
      showsHorizontalScrollIndicator={false}
      >
        {restaurants.map((restaurant, i) => {
          return <RestaurantCard key={i} restaurant={restaurant} />;
        })}
      </ScrollView>

    </View>
  );
};

export default FeaturedRow;

import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { categories } from "./../constants/index";

const activeCatContainerClass = `bg-gray-500`;
const activeCatNameClasses = `color-black font-bold`;
const unActiveCatContainerClass = `bg-gray-300`;
const unActiveCatNameClasses = `color-gray-600 `;
const Categories = () => {
  let [activeCat, setActiveCat] = useState(null);

  return (
    <View className="flex-row gap-3 mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible"
      >
        {categories.map((category, index) => {
          return (
            <View
              key={index}
              className="text-center flex flex-column justify-center items-center mr-6 "
            >
              <TouchableOpacity
                className={`flex flex-column justify-center items-center`}
                onPress={() => {
                  setActiveCat(category?.id);
                }}
              >
                <View
                  className={
                    "p-3 rounded-full text-center flex items-center justify-center" +
                    ` ${
                      activeCat == category?.id
                        ? activeCatContainerClass
                        : unActiveCatContainerClass
                    }`
                  }
                >
                  <Image style={{ width: 25, height: 25 }} source={category.image} />
                </View>
                <View className="p-2">
                  <Text
                    className={`${
                      activeCat == category?.id ? activeCatNameClasses : unActiveCatNameClasses
                    }`}
                  >
                    {category.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

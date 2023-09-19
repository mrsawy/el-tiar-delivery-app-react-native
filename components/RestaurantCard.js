import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";

import * as Icon from "react-native-feather";

const RestaurantCard = ({ restaurant }) => {
  return (
    <TouchableWithoutFeedback>
      <View className="bg-white mr-2 shadow-lg rounded-3xl">
        <Image className="h-36 w-64 rounded-t-3xl" source={restaurant.image} />
        <View className="bg-white  shadow-lg rounded-3xl p-2 pt-1">
          <Text className="font-bold pt-1 text-lg">{restaurant.name}</Text>

          <View className="flex-row items-center space-x-1">
              <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
              <Text className="text-xs">
                  <Text className="text-green-700">{restaurant.rating}</Text>
                  <Text className="text-gray-700"> ({restaurant.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{restaurant?.type || `Fast Food`}</Text>
              </Text>
          </View>

          <Text className="font-semibold text-gray-700">{restaurant.type}</Text>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text className="text-gray-700 text-xs"> Nearby · {restaurant.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;

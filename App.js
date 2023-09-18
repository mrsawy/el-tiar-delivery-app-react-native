import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black p-2">
      <Text className="text-white text-bold text-4xl">Hello world </Text>
      <StatusBar style="light" />
    </View>
  );
}

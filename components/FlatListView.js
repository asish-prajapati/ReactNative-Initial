import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

export default function ListScrollView() {
  const [people, setPeople] = useState([
    { name: "Asish", key: "1" },
    { name: "Akash", key: "2" },
    { name: "Mukesh", key: "3" },
    { name: "Shakshi", key: "4" },
    { name: "Kavita", key: "5" },
    { name: "Neha", key: "6" },
    { name: "Asish", key: "7" },
    { name: "Akash", key: "8" },
    { name: "Mukesh", key: "9" },
    { name: "Shakshi", key: "10" },
    { name: "Kavita", key: "11" },
    { name: "Neha", key: "12" },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});

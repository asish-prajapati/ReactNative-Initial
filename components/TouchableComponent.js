import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function TouchableComponent() {
  const [people, setPeople] = useState([
    { name: "Assish", key: "1" },
    { name: "Akaash", key: "2" },
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

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevState) => {
      return prevState.filter((person) => person.key !== id);
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
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
    marginRight: 20,
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function TextInputWithState() {
  const [name, setName] = useState("Asish");
  const [age, setAge] = useState(24);

  return (
    <View style={styles.container}>
      <Text>Enter Name :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        onChangeText={(value) => setName(value)}
      />
      <Text>Enter Age : </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter Age "
        onChangeText={(value) => setAge(value)}
      />
      <Text>
        name: {name} ,age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 8,
    width: 200,
  },
});

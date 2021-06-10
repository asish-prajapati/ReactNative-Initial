import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

function StateWithButton() {
  const [name, setName] = useState("Asish");
  const [person, setPerson] = useState({ name: "mario", age: 40 });
  const pressHandler = () => {
    setName("Mukesh");
    setPerson({ name: "corona", age: 19 });
  };
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Update State" onPress={pressHandler} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  },
});

export default StateWithButton;

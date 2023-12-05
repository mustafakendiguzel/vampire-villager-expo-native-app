// App.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PlayerList from "./src/components/PlayerList";

const App = () => {
  const players = [
    { id: 1, name: "Mustafa Kendigüzel", initials: "MK" },
    { id: 2, name: "Fatih Güzel", initials: "FG" },
    { id: 3, name: "Sefa Enes Karahan", initials: "SEK" },
    { id: 4, name: "Sude Kendigüzel", initials: "SK" },
  ];

  return (
    <View style={styles.container}>
      <PlayerList players={players} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default App;

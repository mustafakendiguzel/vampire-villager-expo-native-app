// OyuncuListesi.tsx

import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ListRenderItem,
} from "react-native";

interface Player {
  id: number;
  name: string;
  initials: string;
}

interface OyuncuListesiProps {
  players: Player[];
}

const OyuncuListesi: React.FC<OyuncuListesiProps> = ({ players }) => {
  const renderItem: ListRenderItem<Player> = ({ item }) => (
    <View style={styles.playerContainer}>
      <Image
        source={{ uri: "https://placekitten.com/100/100" }}
        style={styles.playerImage}
      />
      <Text style={styles.playerName}>{item.name}</Text>
      <Text style={styles.playerInitials}>{item.initials}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oyuncular</Text>
      <FlatList
        data={players}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
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
    marginTop: 40, // Yukarıdan boşluk eklenen kısım
  },
  flatListContainer: {
    alignItems: "center",
  },
  playerContainer: {
    alignItems: "center",
    margin: 10,
  },
  playerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  playerName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  playerInitials: {
    marginTop: 5,
    fontSize: 12,
    color: "gray",
  },
});

export default OyuncuListesi;

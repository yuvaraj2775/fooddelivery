import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const mockRestaurants = [
  { id: '1', name: 'Burger Palace', category: 'Fast Food', rating: 4.5 },
  { id: '2', name: 'Pizza Heaven', category: 'Italian', rating: 4.2 },
  { id: '3', name: 'Sushi World', category: 'Japanese', rating: 4.7 },
];

export function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    setRestaurants(mockRestaurants);
  }, []);

  const renderRestaurantItem = ({ item }) => (
    <TouchableOpacity
      style={styles.restaurantItem}
      onPress={() => navigation.navigate('Restaurant', { id: item.id, name: item.name })}
    >
      <View>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantCategory}>{item.category}</Text>
        <Text style={styles.restaurantRating}>Rating: {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={renderRestaurantItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  restaurantItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurantCategory: {
    fontSize: 14,
    color: '#666',
  },
  restaurantRating: {
    fontSize: 14,
    color: '#f4c842',
  },
});


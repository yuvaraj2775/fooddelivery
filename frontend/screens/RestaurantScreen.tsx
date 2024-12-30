import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function RestaurantScreen() {
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  const route = useRoute();
  const { id } = route.params;

  useEffect(() => {
    // Fetch restaurant details and menu from API
    // This is a placeholder, replace with actual API call
    setRestaurant({ id, name: `Restaurant ${id}` });
    setMenu([
      { id: '1', name: 'Dish 1', price: 10 },
      { id: '2', name: 'Dish 2', price: 15 },
      { id: '3', name: 'Dish 3', price: 12 },
    ]);
  }, [id]);

  const renderMenuItem = ({ item }) => (
    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.name}</Text>
      <Text>${item.price}</Text>
      <TouchableOpacity onPress={() => {/* Add to cart logic */}}>
        <Text style={{ color: 'blue' }}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  if (!restaurant) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text style={{ fontSize: 24, padding: 16 }}>{restaurant.name}</Text>
      <FlatList
        data={menu}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}


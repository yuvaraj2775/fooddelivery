import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch nearby restaurants from API
    // This is a placeholder, replace with actual API call
    setRestaurants([
      { id: '1', name: 'Restaurant 1' },
      { id: '2', name: 'Restaurant 2' },
      { id: '3', name: 'Restaurant 3' },
    ]);
  }, []);

  const renderRestaurantItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Restaurant', { id: item.id })}>
      <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={{ fontSize: 24, padding: 16 }}>Nearby Restaurants</Text>
      <FlatList
        data={restaurants}
        renderItem={renderRestaurantItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}


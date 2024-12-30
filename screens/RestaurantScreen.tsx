import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const mockMenuItems = [
  { id: '1', name: 'Classic Burger', price: 9.99, description: 'Juicy beef patty with fresh toppings' },
  { id: '2', name: 'Cheese Pizza', price: 12.99, description: 'Traditional pizza with mozzarella cheese' },
  { id: '3', name: 'California Roll', price: 8.99, description: 'Crab, avocado, and cucumber roll' },
];

export function RestaurantScreen() {
  const [menuItems, setMenuItems] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const { id, name } = route.params;

  useEffect(() => {
    // In a real app, you would fetch this data from an API based on the restaurant id
    setMenuItems(mockMenuItems);
  }, [id]);

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <View>
        <Text style={styles.menuItemName}>{item.name}</Text>
        <Text style={styles.menuItemDescription}>{item.description}</Text>
        <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => {/* Add to cart logic */}}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.viewCartButton} onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.viewCartButtonText}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  menuItemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  viewCartButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    alignItems: 'center',
  },
  viewCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


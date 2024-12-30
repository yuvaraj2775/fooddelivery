import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const orderStatuses = ['Preparing', 'Ready for Pickup', 'On the Way', 'Delivered'];

export function OrderTrackingScreen() {
  const [currentStatus, setCurrentStatus] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus((prevStatus) => (prevStatus + 1) % orderStatuses.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Status</Text>
      {orderStatuses.map((status, index) => (
        <View key={status} style={styles.statusContainer}>
          <View style={[styles.statusIndicator, index <= currentStatus && styles.activeIndicator]} />
          <Text style={[styles.statusText, index <= currentStatus && styles.activeText]}>{status}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ccc',
    marginRight: 8,
  },
  activeIndicator: {
    backgroundColor: '#4CAF50',
  },
  statusText: {
    fontSize: 16,
    color: '#666',
  },
  activeText: {
    fontWeight: 'bold',
    color: '#000',
  },
});


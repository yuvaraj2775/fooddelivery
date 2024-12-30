import axios from 'axios';
import { Restaurant, MenuItem } from './types';

const API_URL = 'http://localhost:3000';

export async function getRestaurants(): Promise<Restaurant[]> {
  const response = await axios.get(`${API_URL}/restaurants`);
  return response.data;
}

export async function getRestaurant(id: string): Promise<Restaurant> {
  const response = await axios.get(`${API_URL}/restaurants/${id}`);
  return response.data;
}

export async function getMenuItems(restaurantId: string): Promise<MenuItem[]> {
  const response = await axios.get(`${API_URL}/restaurants/${restaurantId}/menu`);
  return response.data;
}


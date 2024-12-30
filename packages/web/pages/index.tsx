import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { getRestaurants } from '@food-delivery/shared/api';
import { Restaurant } from '@food-delivery/shared/types';

interface HomeProps {
  restaurants: Restaurant[];
}

export default function Home({ restaurants }: HomeProps) {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Nearby Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <Link href={`/restaurant/${restaurant.id}`} key={restaurant.id}>
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold">{restaurant.name}</h2>
              <p className="text-gray-600">{restaurant.category}</p>
              <p className="text-yellow-500">Rating: {restaurant.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const restaurants = await getRestaurants();
  return { props: { restaurants } };
};


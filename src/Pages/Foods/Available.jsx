import React from 'react';
import { useLoaderData } from 'react-router';
import FoodCard from './FoodCard';
import MyContainer from '../../Components/MyContainer';

const Available = () => {
  const foods = useLoaderData();

  return (
    <MyContainer className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Available Foods</h2>

      {foods.length === 0 ? (
        <p className="text-center text-gray-500">No food available right now.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foods.map(food => <FoodCard key={food._id} food={food} />)}
        </div>
      )}
    </MyContainer>
  );
};

export default Available;
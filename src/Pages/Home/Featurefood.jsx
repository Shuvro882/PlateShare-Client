import React from 'react';
import { useNavigate } from 'react-router';
import FoodCard from '../Foods/FoodCard';
import MyContainer from '../../Components/MyContainer';

const FeatureFood = ({food}) => {
     const navigate = useNavigate();

  
    const topFoods = [...food]
  .sort((a, b) => parseInt(b.food_quantity) - parseInt(a.food_quantity))
    .slice(0, 6);
    return (
       <MyContainer className="py-12">

      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Foods
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          topFoods.map(food => (
            <FoodCard key={food._id} food={food} />
          ))
        }
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/available")}
          className="btn btn-primary"
        >
          Show All
        </button>
      </div>

    </MyContainer>
    );
};

export default FeatureFood;
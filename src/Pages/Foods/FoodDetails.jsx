import React from 'react';
import { useLoaderData } from 'react-router';

const FoodDetails = () => {

   const data = useLoaderData()
   const food = data.result
   console.log(food)

    return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen">

      <div className="grid md:grid-cols-2 gap-8">

        {/* Food Image */}
        <div>
          <img
            src={food.food_image}
            alt="food"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        

        {/* Food Details */}
        <div>
          <h2 className="text-3xl font-bold mb-4">{food.food_name}</h2>

          <p className="mb-2">
            <strong>Quantity:</strong> {food.food_quantity}
          </p>

          <p className="mb-2">
            <strong>Pickup Location:</strong> {food.pickup_location}
          </p>

          <p className="mb-2">
            <strong>Expire Date:</strong> {food.expire_date}
          </p>

          <p className="mb-4">
            <strong>Additional Notes:</strong> {food.additional_notes}
          </p>

          {/* Donator Info */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src={food.donator?.image}
              alt={food.donator?.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">{food.donator?.name}</p>
              <p className="text-sm text-gray-500">{food.donator?.email}</p>
            </div>
          </div>

          {/* Request Food Button */}
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Request Food
          </button>

        </div>

      </div>
    </div>
    );
};

export default FoodDetails;
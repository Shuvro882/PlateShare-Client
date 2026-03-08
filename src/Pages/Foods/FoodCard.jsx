import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";

const FoodCard = ({ food }) => {
  const {
    _id,
    food_name,
    food_image,
    food_quantity,
    pickup_location,
    expire_date,
    donator
  } = food;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDetails = () => {
    if (user) {
      navigate(`/food-details/${_id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-lg transition">
      <img src={food_image} alt={food_name} className="h-48 w-full object-cover" />

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold">{food_name}</h3>

        <div className="flex items-center gap-3">
          <img
            src={donator?.image}
            alt={donator?.name}
            className="w-10 h-10 rounded-full border"
          />
          <p className="text-sm font-medium">{donator?.name}</p>
        </div>

        <p className="text-sm text-gray-600">🍛 {food_quantity}</p>
        <p className="text-sm text-gray-600">📍 {pickup_location}</p>
        <p className="text-sm text-gray-600">⏰ Expires: {expire_date}</p>

        <button
          onClick={handleDetails}
          className="btn w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
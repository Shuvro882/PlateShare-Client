import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';


const AddFood = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const foodData = {
      food_name: form.foodName.value,
      food_image: form.image.value,
      food_quantity: form.quantity.value,
      pickup_location: form.location.value,
      expire_date: form.expireDate.value,
      additional_notes: form.notes.value,
      food_status: "Available",
      created_at: new Date().toISOString(),
      donator: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };

    try {
      const res = await fetch('https://plate-share-server-lake.vercel.app/food', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(foodData),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Food added successfully 🍛");
        form.reset();
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-5 p-6 bg-gray-300 shadow rounded-lg">
  <h2 className="text-2xl font-bold mb-6 text-center">Add Food</h2>

  <form onSubmit={handleSubmit} className="space-y-4">

    {/* Food Name */}
    <div>
      <label className="font-medium">Food Name</label>
      <input
        type="text"
        name="foodName"
        placeholder="Enter food name"
        className="input input-bordered w-full rounded-full mt-1"
        required
      />
    </div>

    {/* Food Image */}
    <div>
      <label className="font-medium">Food Image URL (imgbb)</label>
      <input
        type="text"
        name="image"
        placeholder="Paste imgbb image URL"
        className="input input-bordered w-full rounded-full mt-1"
        required
      />
    </div>

    {/* Quantity */}
    <div>
      <label className="font-medium">Food Quantity</label>
      <input
        type="number"
        name="quantity"
        placeholder="Serves 2 people"
        className="input input-bordered w-full rounded-full mt-1"
        required
      />
    </div>

    {/* Location */}
    <div>
      <label className="font-medium">Pickup Location</label>
      <input
        type="text"
        name="location"
        placeholder="Enter pickup location"
        className="input input-bordered w-full rounded-full mt-1"
        required
      />
    </div>

    {/* Expire Date */}
    <div>
      <label className="font-medium">Expire Date</label>
      <input
        type="date"
        name="expireDate"
        className="input input-bordered w-full rounded-full mt-1"
        required
      />
    </div>

    {/* Notes */}
    <div>
      <label className="font-medium">Additional Notes</label>
      <textarea
        name="notes"
        placeholder="Write extra information"
        className="textarea textarea-bordered w-full mt-1"
      ></textarea>
    </div>

    <button
      type="submit"
      disabled={loading}
      className="btn bg-orange-500 rounded-full w-full"
    >
      {loading ? "Adding..." : "Add Food"}
    </button>

  </form>
</div>
  );
};

export default AddFood;
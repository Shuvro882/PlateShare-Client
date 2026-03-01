import React, { useContext, useState } from 'react';

const AddFood = () => {

  const [loading, setLoading] = useState(false);


    return (
        <div className="max-w-lg mx-auto my-5 p-6 bg-gray-300 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Food</h2>

      <form className="space-y-4">
        <input
          type="text"
          name="foodName"
          placeholder="Food Name"
          className="input input-bordered w-full rounded-full"
          required
        />

        <input
          type="file"
          name="image"
          className="file-input file-input-bordered w-full rounded-full"
          required
        />

        <input
          type="text"
          name="quantity"
          placeholder="Food Quantity (e.g. Serves 2 people)"
          className="input input-bordered w-full rounded-full"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Pickup Location"
          className="input input-bordered w-full rounded-full"
          required
        />

        <input
          type="date"
          name="expireDate"
          className="input input-bordered w-full rounded-full"
          required
        />

        <textarea
          name="notes"
          placeholder="Additional Notes"
          className="textarea textarea-bordered w-full "
        ></textarea>

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
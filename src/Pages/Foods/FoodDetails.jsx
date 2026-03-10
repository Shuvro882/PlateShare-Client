import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const FoodDetails = () => {
  const data = useLoaderData();
  const food = data.result;

  const { user } = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [reason, setReason] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [requests, setRequests] = useState([]);

  // Check if current user is owner
  const isOwner = user?.email === food.donator?.email;

  // Fetch requests for this food (only owner sees)
  useEffect(() => {
    if (isOwner) {
      fetch(`http://localhost:3000/foodRequests/${food._id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setRequests(data.requests);
        })
        .catch((err) => console.error(err));
    }
  }, [food._id, isOwner]);

  // Submit food request
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login to request food.");
      return;
    }

    const requestData = {
      foodId: food._id,
      userEmail: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
      location,
      reason,
      contactNo,
      status: "pending",
    };

    try {
      const res = await fetch("http://localhost:3000/foodRequests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });
      const result = await res.json();
      if (result.success) {
        alert("Request submitted successfully!");
        setIsModalOpen(false);
        setLocation("");
        setReason("");
        setContactNo("");
      } else throw new Error("Failed to submit request");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // Accept / Reject handler
  const handleStatusChange = async (requestId, status) => {
    try {
      const res = await fetch(`http://localhost:3000/foodRequests/${requestId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const result = await res.json();
      if (result.success) {
        // Update local state
        setRequests((prev) =>
          prev.map((r) => (r._id === requestId ? { ...r, status } : r))
        );
      } else throw new Error("Failed to update status");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-4 p-6 min-h-screen bg-white rounded-lg shadow-lg">
      {/* Food Details Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={food.food_image} alt="food" className="w-full rounded-lg shadow-md" />
        </div>
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
          <strong>Donator Information:</strong>
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
          {!isOwner && (
            <button
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              onClick={() => setIsModalOpen(true)}
            >
              Request Food
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-20" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative z-10">
            <button
              className="absolute top-2 right-2 text-gray-500 font-bold text-lg"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4">Request Food</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Why Need Food</label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Contact No.</label>
                <input
                  type="text"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Requests Table for Owner */}
      {isOwner && requests.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Food Requests</h3>
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Email</th>
                  <th className="p-2 border">Location</th>
                  <th className="p-2 border">Reason</th>
                  <th className="p-2 border">Contact</th>
                  <th className="p-2 border">Status</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((r) => (
                  <tr key={r._id} className="text-center">
                    <td className="p-2 border">{r.name}</td>
                    <td className="p-2 border">{r.userEmail}</td>
                    <td className="p-2 border">{r.location}</td>
                    <td className="p-2 border">{r.reason}</td>
                    <td className="p-2 border">{r.contactNo}</td>
                    <td className="p-2 border">{r.status}</td>
                    <td className="p-2 border flex justify-center gap-2">
                      {r.status === "pending" && (
                        <>
                          <button
                            className="bg-green-600 text-white px-3 py-1 rounded"
                            onClick={() => handleStatusChange(r._id, "accepted")}
                          >
                            Accept
                          </button>
                          <button
                            className="bg-red-600 text-white px-3 py-1 rounded"
                            onClick={() => handleStatusChange(r._id, "rejected")}
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
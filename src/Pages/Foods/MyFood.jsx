import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

const MyFood = () => {
  const { user } = useContext(AuthContext);
  const [myRequests, setMyRequests] = useState([]);

  // Fetch all requests by this user
  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:3000/my-food-requests?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyRequests(data))
      .catch((err) => console.error(err));
  }, [user]);

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">My Food Requests</h2>

      {myRequests.length === 0 ? (
        <p className="text-center text-gray-500">You haven't requested any food yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Food Name</th>
                <th className="p-2 border">Quantity</th>
                <th className="p-2 border">Pickup Location</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {myRequests.map((r) => (
                <tr key={r._id} className="text-center">
                  <td className="p-2 border">{r.foodName}</td>
                  <td className="p-2 border">{r.foodQuantity}</td>
                  <td className="p-2 border">{r.foodLocation}</td>
                  <td className="p-2 border">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyFood;
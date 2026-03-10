import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const ManageFood = () => {

  const { user } = useContext(AuthContext);

  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

  // fetch user foods
  useEffect(() => {
    if (!user) return;

    fetch(`https://plate-share-server-lake.vercel.app/my-foods?email=${user.email}`)
      .then(res => res.json())
      .then(data => setFoods(data));
  }, [user]);



  // delete food
  const handleDelete = (_id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this food!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      if (result.isConfirmed) {

        fetch(`https://plate-share-server-lake.vercel.app/food/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {

            if (data.deletedCount > 0) {

              Swal.fire("Deleted!", "Food has been deleted.", "success");

              const remaining = foods.filter(food => food._id !== _id);
              setFoods(remaining);
            }

          });

      }

    });

  };



  // open update modal
  const handleUpdateClick = (food) => {
    setSelectedFood(food);
    document.getElementById("update_modal").showModal();
  };



  // submit update
  const handleUpdateSubmit = (e) => {

    e.preventDefault();

    const form = e.target;

    const updatedFood = {
      food_name: form.food_name.value,
      food_image: form.food_image.value,
      food_quantity: form.food_quantity.value,
      pickup_location: form.pickup_location.value,
      expire_date: form.expire_date.value,
      additional_notes: form.additional_notes.value
    };



    fetch(`https://plate-share-server-lake.vercel.app/food/${selectedFood._id}`, {

      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedFood)

    })
      .then(res => res.json())
      .then(data => {

        if (data.modifiedCount > 0) {

          Swal.fire("Updated!", "Food updated successfully.", "success");

          const updatedList = foods.map(food =>
            food._id === selectedFood._id
              ? { ...food, ...updatedFood }
              : food
          );

          setFoods(updatedList);

          document.getElementById("update_modal").close();
        }

      });

  };



  return (

    <div className="max-w-6xl mx-auto p-6 min-h-screen">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Manage My Foods
      </h2>


      <div className="overflow-x-auto">

        <table className="table w-full">

          <thead className="bg-orange-500 text-white">

            <tr>
              <th>Food</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Expire</th>
              <th>Action</th>
            </tr>

          </thead>


          <tbody>

            {foods.map(food => (

              <tr key={food._id}>

                <td>

                  <div className="flex items-center gap-3">
                    <img
                    src={food.food_image}
                    className="w-12 h-12 rounded"
                  />

                  {food.food_name}
                  </div>

                </td>

                <td>{food.food_quantity}</td>

                <td>{food.pickup_location}</td>

                <td>{food.expire_date}</td>

                <td>

                  <div className="flex gap-2">
                    <button
                    onClick={() => handleUpdateClick(food)}
                    className="btn btn-sm bg-blue-500 text-white"
                  >
                    Update
                  </button>


                  <button
                    onClick={() => handleDelete(food._id)}
                    className="btn btn-sm bg-red-500 text-white"
                  >
                    Delete
                  </button>
                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>



      {/* Update Modal */}

      <dialog id="update_modal" className="modal">

        <div className="modal-box">

          <h3 className="font-bold text-lg mb-4">
            Update Food
          </h3>


          <form onSubmit={handleUpdateSubmit} className="space-y-3">

            <input
              name="food_name"
              defaultValue={selectedFood?.food_name}
              className="input input-bordered w-full"
              placeholder="Food Name"
            />

            <input
              name="food_image"
              defaultValue={selectedFood?.food_image}
              className="input input-bordered w-full"
              placeholder="Food Image URL"
            />

            <input
              name="food_quantity"
              defaultValue={selectedFood?.food_quantity}
              className="input input-bordered w-full"
              placeholder="Food Quantity"
            />

            <input
              name="pickup_location"
              defaultValue={selectedFood?.pickup_location}
              className="input input-bordered w-full"
              placeholder="Pickup Location"
            />

            <input
              type="date"
              name="expire_date"
              defaultValue={selectedFood?.expire_date}
              className="input input-bordered w-full"
            />

            <textarea
              name="additional_notes"
              defaultValue={selectedFood?.additional_notes}
              className="textarea textarea-bordered w-full"
              placeholder="Additional Notes"
            />

            <button
              type="submit"
              className="btn w-full bg-green-600 text-white"
            >
              Update Food
            </button>

          </form>


          <div className="modal-action">

            <form method="dialog">
              <button className="btn">Close</button>
            </form>

          </div>

        </div>

      </dialog>

    </div>

  );
};

export default ManageFood;
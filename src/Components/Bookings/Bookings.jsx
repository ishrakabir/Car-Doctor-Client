import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const url = `https://car-doctor-server-sepia-two.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("datas", data);
        if (!data.error)
          setBookings(data)
        else
          navigate('/');
        
      });
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to Delete ?");
    if (proceed) {
      fetch(`https://car-doctor-server-sepia-two.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = bookings.filter((booking) => booking._id != id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirmation = (id) => {
    fetch(`https://car-doctor-server-sepia-two.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount>0) {
          const remaining = bookings.filter(booking => booking._id !== id);
          const updated = bookings.find(booking => booking._id === id);
          updated.status = 'confirm';
          const newbookings = [updated, ...remaining];
          setBookings(newbookings);
        }
      });
  }

  return (
    <div>
      <div className="alert">
        <h1 className="text-xl ">Your Bookings</h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-lg">Image</th>
              <th className="text-lg">Service</th>
              <th className="text-lg">Date</th>
              <th className="text-lg">Price</th>
              <th className="text-lg">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirmation={handleConfirmation}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;

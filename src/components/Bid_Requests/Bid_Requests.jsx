import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const Bid_Requests = () => {
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/my_bid_requests?email=${user?.email}`)
      .then((res) => setBids(res.data));
  }, [user?.email]);

  const handleAccept = (index, id) => {
    const updatedBids = [...bids];
    updatedBids[index].status = "in-progress";
    setBids(updatedBids);
    axios.patch(`http://localhost:5000/my_bid_request/${id}`, {
      status: "in-progress",
    });
  };

  const handleReject = (index, id) => {
    const updatedBids = [...bids];
    updatedBids[index].status = "canceled";
    setBids(updatedBids);
    axios.patch(`http://localhost:5000/my_bid_request/${id}`, {
      status: "canceled",
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Email</th>
              <th>Deadline</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bids?.map((bid, index) => (
              <tr key={index}>
                <td>{bid?.jobTitle}</td>
                <td>{bid?.userEmail}</td>
                <td>{bid?.deadline}</td>
                <td>${bid?.biddingPrice}</td>
                <td>{bid.status}</td>
                <td>
                  {bid.status === "pending" && (
                    <div>
                      <button
                        className="btn btn-primary btn-xs"
                        onClick={() => handleAccept(index, bid._id)}
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-danger btn-xs"
                        onClick={() => handleReject(index, bid._id)}
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bid_Requests;

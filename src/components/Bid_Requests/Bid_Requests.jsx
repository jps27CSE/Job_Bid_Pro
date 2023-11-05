import { useState } from "react";

const Bid_Requests = () => {
  const [bids, setBids] = useState([
    {
      jobTitle: "Job Title 1",
      email: "user1@example.com",
      deadline: "2023-12-31",
      price: 100,
      status: "pending",
    },
    {
      jobTitle: "Job Title 2",
      email: "user2@example.com",
      deadline: "2023-11-30",
      price: 150,
      status: "in-progress",
    },
    {
      jobTitle: "Job Title 3",
      email: "user3@example.com",
      deadline: "2023-11-15",
      price: 120,
      status: "canceled",
    },
  ]);

  const handleAccept = (index) => {
    const updatedBids = [...bids];
    updatedBids[index].status = "in-progress";
    setBids(updatedBids);
  };

  const handleReject = (index) => {
    const updatedBids = [...bids];
    updatedBids[index].status = "rejected";
    setBids(updatedBids);
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
            {bids.map((bid, index) => (
              <tr key={index}>
                <td>{bid.jobTitle}</td>
                <td>{bid.email}</td>
                <td>{bid.deadline}</td>
                <td>${bid.price}</td>
                <td>{bid.status}</td>
                <td>
                  {bid.status === "pending" && (
                    <div>
                      <button
                        className="btn btn-primary btn-xs"
                        onClick={() => handleAccept(index)}
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-danger btn-xs"
                        onClick={() => handleReject(index)}
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

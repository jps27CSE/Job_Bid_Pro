import { useState } from "react";

const MyBids = () => {
  const [bids, setBids] = useState([
    {
      jobTitle: "Job Title 1",
      email: "user1@example.com",
      deadline: "2023-12-31",
      status: "pending",
    },
    {
      jobTitle: "Job Title 2",
      email: "user2@example.com",
      deadline: "2023-11-30",
      status: "in-progress",
    },
    {
      jobTitle: "Job Title 3",
      email: "user3@example.com",
      deadline: "2023-11-15",
      status: "canceled",
    },
  ]);

  const handleComplete = (index) => {
    const updatedBids = [...bids];
    updatedBids[index].status = "complete";
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
              <th>Status</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid, index) => (
              <tr key={index}>
                <td>{bid.jobTitle}</td>
                <td>{bid.email}</td>
                <td>{bid.deadline}</td>
                <td>{bid.status}</td>
                <td>
                  {bid.status === "in-progress" && (
                    <button
                      className="btn btn-primary btn-xs"
                      onClick={() => handleComplete(index)}
                    >
                      Complete
                    </button>
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

export default MyBids;

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/my_bids?email=${user?.email}`)
      .then((res) => setBids(res.data));
  }, [user?.email]);

  console.log(bids);

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
                <td>{bid.buyerEmail}</td>
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

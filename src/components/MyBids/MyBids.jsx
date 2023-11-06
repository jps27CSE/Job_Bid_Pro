import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [bids, setBids] = useState([]);
  const [ascendingSort, setAscendingSort] = useState(false);

  useEffect(() => {
    axiosSecure
      .get(
        `/my_bids?email=${user?.email}&sort=${ascendingSort ? "asc" : "desc"}`
      )
      .then((res) => setBids(res.data));
  }, [user?.email, ascendingSort, axiosSecure]);

  const handleSort = () => {
    setAscendingSort(!ascendingSort);
  };

  const handleComplete = (index, id) => {
    const updatedBids = [...bids];
    updatedBids[index].status = "complete";
    setBids(updatedBids);

    axiosSecure.patch(`/my_bids/${id}`, {
      status: "complete",
    });
  };

  return (
    <div>
      <Helmet>
        <title>JobBidPro | My Bids</title>
      </Helmet>
      <div className="overflow-x-auto mb-32">
        <table className="table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Email</th>
              <th>Deadline</th>
              <th>
                Status
                <button
                  onClick={handleSort}
                  className="bg-lime-400 rounded-lg h-8 w-24 ml-2"
                >
                  {ascendingSort ? "Sort Descending" : "Sort Ascending"}
                </button>
              </th>
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
                      onClick={() => handleComplete(index, bid._id)}
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

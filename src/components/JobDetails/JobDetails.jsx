import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../looties/loading.json";
import JobDetailsAnimation from "../looties/JobDetails.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const JobDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useQuery({
    queryKey: ["get"],
    queryFn: () =>
      fetch(`http://localhost:5000/job_details/${id}`).then((res) =>
        res.json()
      ),
    initialData: {},
  });
  const isOwner = user?.email === data?.employer;
  return (
    <div>
      {isLoading ? (
        <Lottie className="mx-auto w-80" animationData={Loading} loop={true} />
      ) : (
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <Lottie
              className="mx-auto w-80"
              animationData={JobDetailsAnimation} // Update with the animation data from the job details
              loop={true}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.name}</h2>
            <p>Deadline: {data.deadline}</p>
            <p>
              Price Range: {data.minimum} - {data.maximum}
            </p>
            <p>Description: {data.description}</p>
            <p>Your Email: {user?.email}</p>
            <p>Buyer Email: {data.employer}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price (your bidding amount)</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Your bid amount"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
                name="deadline"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email </span>
              </label>
              <input
                type="text"
                name="email"
                className="input input-bordered"
                defaultValue={user?.email}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Buyer Email</span>
              </label>
              <input
                type="text"
                name="buyerEmail"
                value={data.employer}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control mt-6">
              {isOwner ? (
                <p>You are the owner of this job, so you cannot bid on it.</p>
              ) : (
                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                    Bid on the project
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;

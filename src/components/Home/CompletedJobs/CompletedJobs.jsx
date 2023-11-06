import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";
import CompleteAnimation from "../../looties/Complete.json";
import EmptyJobAnimation from "../../looties/EmptyJob.json";
import LoadingSpinner from "../../looties/LoadingSpinner1.json";
import Lottie from "lottie-react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CompletedJobs = () => {
  const { user } = useContext(AuthContext);
  const [completedJobs, setCompletedJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/my_bids?email=${user?.email}`).then((res) => {
      const filteredJobs = res.data.filter((job) => job.status === "complete");
      setCompletedJobs(filteredJobs);
      setIsLoading(false);
    });
  }, [user?.email, axiosSecure]);

  return (
    <div>
      <h1 className="text-4xl font-bold mt-5 mb-5">Completed Jobs</h1>
      {isLoading ? (
        <Lottie
          className="mx-auto w-80"
          animationData={LoadingSpinner}
          loop={true}
        />
      ) : completedJobs && completedJobs.length > 0 ? (
        completedJobs.map((job) => (
          <div key={job._id} className="card mb-5">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <Lottie
                  className="mx-auto w-52"
                  animationData={CompleteAnimation}
                  loop={true}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">{job.jobTitle}</h2>
                <p className="text-2xl">Deadline: {job.deadline}</p>
                <p className="text-2xl">Buyer Email: {job.buyerEmail}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Lottie
          className="mx-auto w-72"
          animationData={EmptyJobAnimation}
          loop={true}
        />
      )}
    </div>
  );
};

export default CompletedJobs;

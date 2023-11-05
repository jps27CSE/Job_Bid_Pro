import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import SinglePostedJob from "./SinglePostedJob/SinglePostedJob";
import EmptyAnimation from "../looties/Empty.json";
import LoadingSpinner from "../looties/LoadingSpinner1.json";
import Lottie from "lottie-react";

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);
  const [postedData, setPostedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/my_posted_jobs?email=${user?.email}`)
      .then((res) => {
        setPostedData(res.data);
        setIsLoading(false);
      });
  }, [user?.email]);

  return (
    <div>
      {isLoading ? (
        <Lottie
          className="mx-auto w-80"
          animationData={LoadingSpinner}
          loop={true}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {postedData.length > 0 ? (
            postedData.map((item) => (
              <SinglePostedJob key={item._id} data={item} />
            ))
          ) : (
            <div className=" ml-0 md:ml-0 lg:ml-72 flex flex-col md:flex-col lg:flex-row justify-center mx-auto">
              <Lottie
                className="mx-auto w-80 "
                animationData={EmptyAnimation}
                loop={true}
              />
              <h1 className="text-5xl my-auto">Empty</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyPostedJobs;

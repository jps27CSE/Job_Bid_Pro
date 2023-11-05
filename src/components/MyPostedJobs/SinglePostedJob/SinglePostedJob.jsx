import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SinglePostedJob = ({ data, postedData, setPostedData }) => {
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/delete_job/${id}`).then((res) => {
      if (res.status === 200) {
        const remaining = postedData.filter((item) => item._id !== id);
        setPostedData(remaining);
        toast("Job deleted successfully");
      }
    });
  };
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{data.job}</h2>
          <p>{data.description}</p>
          <p>Category: {data.category}</p>
          <div className="card-actions justify-end">
            <Link to={`/posted_jobs/edit/${data._id}`}>
              <button className="btn btn-primary">Update</button>
            </Link>
            <button
              onClick={() => handleDelete(data?._id)}
              className="btn btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostedJob;

SinglePostedJob.propTypes = {
  data: PropTypes.object,
  postedData: PropTypes.array,
  setPostedData: PropTypes.func,
};

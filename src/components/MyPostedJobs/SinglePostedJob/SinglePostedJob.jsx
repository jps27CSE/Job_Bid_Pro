import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const SinglePostedJob = ({ data, postedData, setPostedData }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://b8a11-server-side-jps27-cse.vercel.app/delete_job/${id}`
          )
          .then((res) => {
            if (res.status === 200) {
              const remaining = postedData.filter((item) => item._id !== id);
              setPostedData(remaining);
              toast("Job deleted successfully");
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{data.job}</h2>
          <p>{data.description}</p>
          <p>
            <span className="font-bold">Category:</span> {data.category}
          </p>
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

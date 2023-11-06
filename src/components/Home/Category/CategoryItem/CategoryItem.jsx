import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CategoryItem = ({ job }) => {
  console.log(job);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{job.job}</h2>
        <p>
          <span className="font-bold">Deadline:</span> {job.deadline}
        </p>
        <p>
          <span className="font-bold">Price Range:</span> {job.minimum} -{" "}
          {job.maximum} TK
        </p>
        <p>{job.description}</p>
        <div className="card-actions justify-end">
          <Link to={`/job_deteails/${job._id}`}>
            <button className="btn btn-primary">Bid Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  job: PropTypes.object.isRequired,
};

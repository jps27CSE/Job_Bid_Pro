import PropTypes from "prop-types";
const CategoryItem = ({ job }) => {
  console.log(job);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{job.job}</h2>
        <p>Deadline: {job.deadline}</p>
        <p>
          Price Range: {job.minimum} - {job.maximum} TK
        </p>
        <p>{job.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Bid Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  job: PropTypes.object.isRequired,
};

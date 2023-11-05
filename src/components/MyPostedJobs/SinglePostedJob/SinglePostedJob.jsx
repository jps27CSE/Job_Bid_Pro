import PropTypes from "prop-types";

const SinglePostedJob = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{data.job}</h2>
          <p>{data.description}</p>
          <p>Category: {data.category}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostedJob;

SinglePostedJob.propTypes = {
  data: PropTypes.object,
};

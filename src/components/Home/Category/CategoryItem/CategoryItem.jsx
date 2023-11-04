const CategoryItem = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Job Title</h2>
        <p>Deadline: [Insert Deadline]</p>
        <p>Price Range: [Insert Price Range]</p>
        <p>Short Description: [Insert Short Description]</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Bid Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;

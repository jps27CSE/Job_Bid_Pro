import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import CompletedJobs from "./CompletedJobs/CompletedJobs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>JobBidPro | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <CompletedJobs />
    </div>
  );
};

export default Home;

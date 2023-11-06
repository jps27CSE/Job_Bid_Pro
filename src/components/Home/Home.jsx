import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import CompletedJobs from "./CompletedJobs/CompletedJobs";
import NewsLetter from "../NewLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>JobBidPro | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <CompletedJobs />
      <NewsLetter />
    </div>
  );
};

export default Home;

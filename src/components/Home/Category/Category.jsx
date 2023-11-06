import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryItem from "./CategoryItem/CategoryItem";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
const Category = () => {
  const [webDevelopmentData, setWebDevelopmentData] = useState([]);
  const [digitalMarketingData, setDigitalMarketingData] = useState([]);
  const [graphicsDesignData, setGraphicsDesignData] = useState([]);
  const { data, isLoading } = useQuery({
    queryKey: ["get"],
    queryFn: () =>
      fetch("https://b8a11-server-side-jps27-cse.vercel.app/allJobs").then(
        (res) => res.json()
      ),
    initialData: [],
  });

  useEffect(() => {
    if (!isLoading && Array.isArray(data)) {
      const webDevelopmentJobs = data.filter(
        (job) => job.category === "Web Development"
      );
      setWebDevelopmentData(webDevelopmentJobs);

      const digitalMarketingJobs = data.filter(
        (job) => job.category === "Digital Marketing"
      );
      setDigitalMarketingData(digitalMarketingJobs);

      const graphicsDesignJobs = data.filter(
        (job) => job.category === "Graphics Design"
      );
      setGraphicsDesignData(graphicsDesignJobs);
    }
  }, [data, isLoading]);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Category</h1>
      <Tabs>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphics Desgin</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {webDevelopmentData.map((job) => (
              <CategoryItem key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {digitalMarketingData.map((job) => (
              <CategoryItem key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {graphicsDesignData.map((job) => (
              <CategoryItem key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;

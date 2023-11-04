import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Category = () => {
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
          <h2>Any content 1</h2>
          <h2>Any content 1</h2>
          <h2>Any content 1</h2>
          <h2>Any content 1</h2>
          <h2>Any content 1</h2>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;

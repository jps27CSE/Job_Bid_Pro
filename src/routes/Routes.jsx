import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Add_Job from "../components/Add_Job/Add_Job";
import JobDetails from "../components/JobDetails/JobDetails";
import MyBids from "../components/MyBids/MyBids";
import MyPostedJobs from "../components/MyPostedJobs/MyPostedJobs";
import EditJobs from "../components/MyPostedJobs/EditJobs/EditJobs";
import Bid_Requests from "../components/Bid_Requests/Bid_Requests";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add_job",
        element: (
          <PrivateRoute>
            <Add_Job />
          </PrivateRoute>
        ),
      },
      {
        path: "/job_deteails/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my_bids",
        element: (
          <PrivateRoute>
            <MyBids />,
          </PrivateRoute>
        ),
      },
      {
        path: "/my_posted_jobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/posted_jobs/edit/:id",
        element: <EditJobs />,
      },
      {
        path: "/bid_requests",
        element: (
          <PrivateRoute>
            <Bid_Requests />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

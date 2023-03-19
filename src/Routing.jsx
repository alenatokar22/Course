import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { App } from "./App";
import { ErrorPage } from "./components/ErrorPage";
import { Course } from "./CoursePage";
import { fetchCourse } from "./fetch-course";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <App />,
        index: true,
      },
      {
        path: "/course/:courseId",
        element: <Course />,
        loader: fetchCourse,
      },
    ],
  },
]);

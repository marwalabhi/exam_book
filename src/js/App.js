import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router";
import ExamPage from "../components/ExamPage/ExamPage";
import Header from "../components/Header/Header";
import ResultScreen from "../components/ResultScreen/ResultScreen";

const AppLayout = () => {
    return (
        <main className="">
          <Header />
          <Outlet />
        </main>
    );
  };

  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <ExamPage/>,
            },
            {
              path: "/result",
              element: <ResultScreen/>,
            },

        ],
    },
    

  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


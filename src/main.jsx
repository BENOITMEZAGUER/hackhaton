import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Events from "./pages/Events";
import Booking from "./pages/Booking";
import Alerts from "./pages/Alerts";
import LabourRights from "./pages/LabourRights";
import Schedule from "./pages/Schedule";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/questionnaire",
        element: <Survey />,
      },
      {
        path: "/evenement",
        element: <Events />,
      },
      {
        path: "/agenda",
        element: <Schedule />,
      },
      {
        path: "/reserver-une-salle",
        element: <Booking />,
      },
      {
        path: "/droit-du-travail",
        element: <LabourRights />,
      },
      {
        path: "/alertes",
        element: <Alerts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

import { createBrowserRouter } from "react-router-dom";
import SmoothScroll from "../components/layout/SmoothScroll";
import Homepage from "../pages/Homepage";
import GeneralLayout from "../components/layout/GeneralLayout";
import HireATalentPage from "../pages/HireTalent";
import OutsourceProjectPage from "../pages/OutsourceProject";
import MembersPage from "../pages/Members";
import ContactPage from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SmoothScroll>
        <GeneralLayout />
      </SmoothScroll>
    ),
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/hire-a-talent",
        element: <HireATalentPage />,
      },
      {
        path: "/members",
        element: <MembersPage />,
      },
      {
        path: "/outsource-project",
        element: <OutsourceProjectPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

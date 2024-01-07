import DetailCarPage from "../pages/DetailCarPage";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import PaymentPage from "../pages/PaymentPage";
import RegisterPage from "../pages/RegisterPage";
import SearchCarPage from "../pages/SearchCarPage";
import SignInPage from "../pages/SignInPage";

export const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/search-car",
    element: <SearchCarPage />,
  },
  {
    path: "/detail-car/:id",
    element: <DetailCarPage />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

import { createBrowserRouter } from "react-router";
import { Layout } from "../components/Layout";
import { HomePage } from "../pages/HomePage";
import { LoansPage } from "../pages/LoansPage";
import { AboutPage } from "../pages/AboutPage";
import { PresencePage } from "../pages/PresencePage";
import { ReviewsPage } from "../pages/ReviewsPage";
import { ContactsPage } from "../pages/ContactsPage";
import { SecurityPage } from "../pages/SecurityPage";
import { FAQPage } from "../pages/FAQPage";
import { NewsPage } from "../pages/NewsPage";
import { CareersPage } from "../pages/CareersPage";
import { BranchesPage } from "../pages/BranchesPage";
import { OnlineBankingPage } from "../pages/OnlineBankingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "loans", element: <LoansPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "presence", element: <PresencePage /> },
      { path: "reviews", element: <ReviewsPage /> },
      { path: "contacts", element: <ContactsPage /> },
      { path: "security", element: <SecurityPage /> },
      { path: "faq", element: <FAQPage /> },
      { path: "news", element: <NewsPage /> },
      { path: "careers", element: <CareersPage /> },
      { path: "branches", element: <BranchesPage /> },
      { path: "online-banking", element: <OnlineBankingPage /> },
    ],
  },
]);

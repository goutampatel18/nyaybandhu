import type { ReactElement } from "react";

import Index from "@/pages/Index";
import Library from "@/pages/Library";
import Services from "@/pages/Services";
import Resources from "@/pages/Resources";
import CaseHistories from "@/pages/CaseHistories";
import News from "@/pages/News";
import ActsRules from "@/pages/ActsRules";
import Circulars from "@/pages/Circulars";
import Contact from "@/pages/Contact";
import Terms from "@/pages/Terms";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Accessibility from "@/pages/Accessibility";
import Sitemap from "@/pages/Sitemap";

import AboutUs from "@/pages/about/AboutUs";
import Department from "@/pages/about/Department";
import History from "@/pages/about/History";
import Vision from "@/pages/about/Vision";
import Functions from "@/pages/about/Functions";
import Organization from "@/pages/about/Organization";
import AdminSetup from "@/pages/about/AdminSetup";
import WhosWho from "@/pages/about/WhosWho";
import Achievements from "@/pages/about/Achievements";
import Charter from "@/pages/about/Charter";

export interface AppRouteConfig {
  path: string;
  element: ReactElement;
}

export const appRoutes: AppRouteConfig[] = [
  { path: "/", element: <Index /> },
  { path: "/library", element: <Library /> },
  { path: "/services", element: <Services /> },
  { path: "/resources", element: <Resources /> },
  { path: "/cases", element: <CaseHistories /> },
  { path: "/news", element: <News /> },
  { path: "/acts-rules", element: <ActsRules /> },
  { path: "/circulars", element: <Circulars /> },
  { path: "/contact", element: <Contact /> },
  { path: "/terms", element: <Terms /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/accessibility", element: <Accessibility /> },
  { path: "/sitemap", element: <Sitemap /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/about/department", element: <Department /> },
  { path: "/about/history", element: <History /> },
  { path: "/about/vision", element: <Vision /> },
  { path: "/about/functions", element: <Functions /> },
  { path: "/about/organization", element: <Organization /> },
  { path: "/about/admin", element: <AdminSetup /> },
  { path: "/about/whos-who", element: <WhosWho /> },
  { path: "/about/achievements", element: <Achievements /> },
  { path: "/about/charter", element: <Charter /> },
];

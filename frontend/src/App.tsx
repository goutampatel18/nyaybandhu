
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatbotProvider } from "@/contexts/ChatbotContext";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Library from "./pages/Library";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import CaseHistories from "./pages/CaseHistories";
import News from "./pages/News";
import ActsRules from "./pages/ActsRules";
import Circulars from "./pages/Circulars";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// About Sub-pages
import AboutUs from "./pages/about/AboutUs";
import Department from "./pages/about/Department";
import History from "./pages/about/History";
import Vision from "./pages/about/Vision";
import Functions from "./pages/about/Functions";
import Organization from "./pages/about/Organization";
import AdminSetup from "./pages/about/AdminSetup";
import WhosWho from "./pages/about/WhosWho";
import Achievements from "./pages/about/Achievements";
import Charter from "./pages/about/Charter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ChatbotProvider>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/library" element={<Library />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/cases" element={<CaseHistories />} />
            <Route path="/news" element={<News />} />
            <Route path="/acts-rules" element={<ActsRules />} />
            <Route path="/circulars" element={<Circulars />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* About Sub-pages */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about/department" element={<Department />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/about/vision" element={<Vision />} />
            <Route path="/about/functions" element={<Functions />} />
            <Route path="/about/organization" element={<Organization />} />
            <Route path="/about/admin" element={<AdminSetup />} />
            <Route path="/about/whos-who" element={<WhosWho />} />
            <Route path="/about/achievements" element={<Achievements />} />
            <Route path="/about/charter" element={<Charter />} />

            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ChatbotProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

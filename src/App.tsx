
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RealEstateHub from "./pages/RealEstateHub";
import UserProfile from "./pages/UserProfile";
import HostingPage from "./pages/HostingPage";
import TokenPage from "./pages/TokenPage";
import AIAgentPage from "./pages/AIAgentPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/real-estate-hub" element={<RealEstateHub />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/hosting" element={<HostingPage />} />
          <Route path="/token" element={<TokenPage />} />
          <Route path="/ai-agents" element={<AIAgentPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

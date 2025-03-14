
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TokenPage from "./pages/TokenPage";
import AIAgentPage from "./pages/AIAgentPage";
import HostingPage from "./pages/HostingPage";
import RealEstateHub from "./pages/RealEstateHub";
import UserProfile from "./pages/UserProfile";
import MineBlocksPage from "./pages/MineBlocksPage";
import EducationHub from "./pages/EducationHub";
import LoginPage from "./pages/LoginPage";
import MarketplacePage from "./pages/MarketplacePage";
import FishcakePage from "./pages/FishcakePage";

function App() {
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/token" element={<TokenPage />} />
        <Route path="/mineblocks" element={<MineBlocksPage />} />
        <Route path="/ai-agent" element={<AIAgentPage />} />
        <Route path="/hosting" element={<HostingPage />} />
        <Route path="/realestate" element={<RealEstateHub />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/education" element={<EducationHub />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/fishcake" element={<FishcakePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

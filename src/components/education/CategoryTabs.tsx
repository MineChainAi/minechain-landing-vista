
import { TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";

type CategoryTabsProps = {
  activeTab: string;
  setActiveTab: (value: string) => void;
};

export const CategoryTabs = ({ activeTab, setActiveTab }: CategoryTabsProps) => {
  const categories = ["all", "ai", "blockchain", "mining", "hosting"];
  
  return (
    <Tabs defaultValue={activeTab} className="w-full">
      <TabsList className="grid grid-cols-5 max-w-xl mx-auto bg-black/30">
        {categories.map((tab) => (
          <TabsTrigger 
            key={tab}
            value={tab}
            onClick={() => setActiveTab(tab)}
            className="text-sm font-medium"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

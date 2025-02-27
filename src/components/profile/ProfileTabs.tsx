
import { Button } from "@/components/ui/button";
import { Activity, Settings, Terminal } from "lucide-react";

interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const ProfileTabs = ({ activeTab, setActiveTab }: ProfileTabsProps) => {
  const tabs = [
    {
      id: "overview",
      label: "Mining Overview",
      icon: <Terminal className="h-4 w-4" />
    },
    {
      id: "contributions",
      label: "Contribution History",
      icon: <Activity className="h-4 w-4" />
    },
    {
      id: "settings",
      label: "Profile Settings",
      icon: <Settings className="h-4 w-4" />
    }
  ];

  return (
    <div className="flex flex-wrap border-b border-[#1E293B] mb-6">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant="ghost"
          className={`gap-2 rounded-none border-b-2 ${
            activeTab === tab.id
              ? "border-[#F97316] text-[#F97316]"
              : "border-transparent text-mine-silver hover:text-white"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.icon}
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

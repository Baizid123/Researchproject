import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { WatchlistProvider } from "@/hooks/use-watchlist";
import { DashboardTab } from "@/components/tabs/dashboard-tab";
import { DataFeaturesTab } from "@/components/tabs/data-features-tab";
import { VisualizationTab } from "@/components/tabs/visualization-tab";
import { RecommendationsTab } from "@/components/tabs/recommendations-tab";
import { EvaluationTab } from "@/components/tabs/evaluation-tab";
import {
  LayoutDashboard,
  Database,
  BarChart3,
  Sparkles,
  Target,
  Film,
} from "lucide-react";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "data-features", label: "Data & Features", icon: Database },
  { id: "visualization", label: "Visualization", icon: BarChart3 },
  { id: "recommendations", label: "Recommendations", icon: Sparkles },
  { id: "evaluation", label: "Evaluation", icon: Target },
];

function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-br from-red-600 to-red-800">
                <Film className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold leading-tight" data-testid="text-app-title">
                  Movie Recommender
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  TF-IDF & Gemini AI Powered
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="hidden sm:flex gap-1.5 text-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                API Connected
              </Badge>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
          <ScrollArea className="w-full whitespace-nowrap">
            <TabsList className="inline-flex h-12 w-auto bg-muted/50 p-1">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="inline-flex items-center gap-2 px-4 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                  data-testid={`tab-${tab.id}`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" className="invisible" />
          </ScrollArea>

          <TabsContent value="dashboard" className="mt-6">
            <DashboardTab onTabChange={handleTabChange} />
          </TabsContent>

          <TabsContent value="data-features" className="mt-6">
            <DataFeaturesTab />
          </TabsContent>

          <TabsContent value="visualization" className="mt-6">
            <VisualizationTab />
          </TabsContent>

          <TabsContent value="recommendations" className="mt-6">
            <RecommendationsTab />
          </TabsContent>

          <TabsContent value="evaluation" className="mt-6">
            <EvaluationTab />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            Movie Recommendation Dashboard powered by TF-IDF Content-Based Filtering & Google Gemini AI
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <WatchlistProvider>
            <Dashboard />
            <Toaster />
          </WatchlistProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

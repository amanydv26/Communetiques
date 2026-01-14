import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

// Scroll to top on route change wrapper component
function PageLayout({ children }: { children: React.ReactNode }) {
  // In a real app we might add useLayoutEffect to scroll top here
  // Wouter doesn't have a native ScrollRestoration component yet
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/">
        <PageLayout><Home /></PageLayout>
      </Route>
      <Route path="/about">
        <PageLayout><About /></PageLayout>
      </Route>
      <Route path="/services">
        <PageLayout><Services /></PageLayout>
      </Route>
      <Route path="/products">
        <PageLayout><Products /></PageLayout>
      </Route>
      <Route path="/contact">
        <PageLayout><Contact /></PageLayout>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, Search, Bell, Film, Upload } from "lucide-react";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t md:top-0 md:bottom-auto md:border-b md:border-t-0">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold cursor-pointer hidden md:block" onClick={() => navigate("/")}>
            Codether
          </h1>
        </div>
        <div className="flex items-center justify-around w-full md:w-auto md:space-x-6">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="flex flex-col items-center md:flex-row">
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1 md:hidden">Home</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate("/search")} className="flex flex-col items-center md:flex-row">
            <Search className="h-5 w-5" />
            <span className="text-xs mt-1 md:hidden">Search</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate("/reels")} className="flex flex-col items-center md:flex-row">
            <Film className="h-5 w-5" />
            <span className="text-xs mt-1 md:hidden">Reels</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate("/notifications")} className="flex flex-col items-center md:flex-row">
            <Bell className="h-5 w-5" />
            <span className="text-xs mt-1 md:hidden">Alerts</span>
          </Button>
          <Avatar className="cursor-pointer w-8 h-8" onClick={() => navigate("/profile")}>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};
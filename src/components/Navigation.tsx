import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, Search, Bell } from "lucide-react";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold cursor-pointer" onClick={() => navigate("/")}>
            Codether
          </h1>
        </div>
        <div className="flex items-center space-x-6">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <Home className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate("/search")}>
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate("/notifications")}>
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="cursor-pointer" onClick={() => navigate("/profile")}>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};
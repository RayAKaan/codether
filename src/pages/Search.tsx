import { Navigation } from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="relative max-w-2xl mx-auto mb-8">
          <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects, developers, or technologies..."
            className="pl-10"
          />
        </div>
        <div className="text-center text-muted-foreground">
          Start typing to search for projects and developers
        </div>
      </main>
    </div>
  );
};

export default Search;
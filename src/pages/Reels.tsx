import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ReelCard } from "@/components/ReelCard";
import { ReelUpload } from "@/components/ReelUpload";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus } from "lucide-react";
import { Navigation } from "@/components/Navigation";

// Mock data for reels
const mockReels = [
  {
    id: 1,
    title: "React Animation Library",
    description: "Built a custom animation library for React components",
    videoUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    likes: 234,
    comments: 45,
    author: {
      name: "John Doe",
      avatar: "https://github.com/shadcn.png",
    },
  },
  {
    id: 2,
    title: "AI Code Generator",
    description: "Using OpenAI to generate React components",
    videoUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    likes: 567,
    comments: 89,
    author: {
      name: "Jane Smith",
      avatar: "https://github.com/shadcn.png",
    },
  },
  {
    id: 3,
    title: "Next.js Portfolio",
    description: "Created a stunning portfolio using Next.js and Tailwind",
    videoUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    likes: 789,
    comments: 123,
    author: {
      name: "Mike Johnson",
      avatar: "https://github.com/shadcn.png",
    },
  },
];

export default function Reels() {
  const [showUpload, setShowUpload] = useState(false);
  const [reels, setReels] = useState(mockReels);

  const handleUpload = (newReel: any) => {
    setReels([newReel, ...reels]);
    setShowUpload(false);
  };

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0 md:pt-16">
      <Navigation />
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={() => setShowUpload(true)}
          className="rounded-full"
          size="icon"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-4rem)] w-full">
        <div className="flex flex-col items-center gap-1">
          {reels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>
      </ScrollArea>

      {showUpload && (
        <ReelUpload onClose={() => setShowUpload(false)} onUpload={handleUpload} />
      )}
    </div>
  );
}
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface ReelCardProps {
  reel: {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    likes: number;
    comments: number;
    author: {
      name: string;
      avatar: string;
    };
  };
}

export function ReelCard({ reel }: ReelCardProps) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(reel.likes);

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <Card className="relative w-full max-w-md h-[calc(100vh-8rem)] overflow-hidden bg-black">
      <img
        src={reel.videoUrl}
        alt={reel.title}
        className="w-full h-full object-cover"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
        <div className="flex items-start gap-3 mb-4">
          <Avatar className="h-10 w-10">
            <img src={reel.author.avatar} alt={reel.author.name} />
          </Avatar>
          <div>
            <h3 className="font-semibold">{reel.title}</h3>
            <p className="text-sm text-gray-300">{reel.description}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-primary"
              onClick={handleLike}
            >
              <Heart className={`h-6 w-6 ${liked ? "fill-current text-red-500" : ""}`} />
              <span className="ml-2">{likesCount}</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-primary"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="ml-2">{reel.comments}</span>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-primary"
          >
            <Share2 className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
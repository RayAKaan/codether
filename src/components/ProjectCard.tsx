import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
  tags: string[];
}

export const ProjectCard = ({
  title,
  description,
  image,
  likes,
  comments,
  tags,
}: ProjectCardProps) => {
  return (
    <Card className="card-hover overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
            <Heart className="w-4 h-4" />
            <span className="text-sm">{likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">{comments}</span>
          </button>
        </div>
        <button className="text-muted-foreground hover:text-primary transition-colors">
          <Share2 className="w-4 h-4" />
        </button>
      </CardFooter>
    </Card>
  );
};
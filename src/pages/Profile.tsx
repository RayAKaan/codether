import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  MapPin,
  Users,
  Code2,
  Heart,
  MessageCircle
} from "lucide-react";

// Mock data - this would come from your backend in a real implementation
const userData = {
  name: "John Doe",
  username: "@johndoe",
  bio: "Full Stack Developer | React Enthusiast | Open Source Contributor",
  location: "San Francisco, CA",
  followers: 1234,
  following: 567,
  projects: 45,
  likes: 892,
  skills: ["React", "TypeScript", "Node.js", "MongoDB", "AWS", "Docker"],
  achievements: [
    { name: "Top Contributor", description: "Ranked in top 10% of contributors" },
    { name: "Project Star", description: "Created a project with 1000+ stars" },
    { name: "Community Leader", description: "Helped 100+ developers" }
  ],
  pinnedProjects: [
    {
      title: "AI Task Manager",
      description: "A smart task management system powered by AI",
      tags: ["React", "TypeScript", "OpenAI"],
      likes: 234,
      comments: 45
    },
    {
      title: "Blockchain Voting",
      description: "Secure and transparent voting system using blockchain",
      tags: ["Solidity", "Web3", "React"],
      likes: 567,
      comments: 89
    }
  ]
};

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-20 pb-16">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8 animate-fadeIn">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2">{userData.name}</h1>
          <p className="text-muted-foreground mb-2">{userData.username}</p>
          <p className="text-center text-muted-foreground mb-4 max-w-lg">
            {userData.bio}
          </p>
          
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{userData.location}</span>
          </div>
          
          <div className="flex gap-4 mb-6">
            <Button variant="outline" size="sm">
              Edit Profile
            </Button>
            <Button size="sm">
              Share Profile
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
            <Card className="p-4 text-center">
              <Users className="w-5 h-5 mx-auto mb-2" />
              <p className="font-bold">{userData.followers}</p>
              <p className="text-sm text-muted-foreground">Followers</p>
            </Card>
            <Card className="p-4 text-center">
              <Users className="w-5 h-5 mx-auto mb-2" />
              <p className="font-bold">{userData.following}</p>
              <p className="text-sm text-muted-foreground">Following</p>
            </Card>
            <Card className="p-4 text-center">
              <Code2 className="w-5 h-5 mx-auto mb-2" />
              <p className="font-bold">{userData.projects}</p>
              <p className="text-sm text-muted-foreground">Projects</p>
            </Card>
            <Card className="p-4 text-center">
              <Heart className="w-5 h-5 mx-auto mb-2" />
              <p className="font-bold">{userData.likes}</p>
              <p className="text-sm text-muted-foreground">Likes</p>
            </Card>
          </div>
        </div>
        
        {/* Skills Section */}
        <section className="mb-8 animate-fadeIn">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {userData.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </section>
        
        {/* Achievements Section */}
        <section className="mb-8 animate-fadeIn">
          <h2 className="text-xl font-semibold mb-4">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {userData.achievements.map((achievement) => (
              <Card key={achievement.name} className="p-4">
                <h3 className="font-semibold mb-2">{achievement.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Pinned Projects Section */}
        <section className="mb-8 animate-fadeIn">
          <h2 className="text-xl font-semibold mb-4">Pinned Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userData.pinnedProjects.map((project) => (
              <Card key={project.title} className="p-4">
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{project.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{project.comments}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Social Links */}
        <section className="flex justify-center gap-4 animate-fadeIn">
          <Button variant="ghost" size="icon">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Twitter className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Mail className="w-5 h-5" />
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Profile;
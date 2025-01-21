import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, MapPin, UserPlus, Github, Linkedin, Star } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";

const mockUser = {
  name: "John Doe",
  username: "@johndoe",
  bio: "Full Stack Developer | React Enthusiast",
  location: "San Francisco, CA",
  avatar: "/placeholder.svg",
  followers: 1234,
  following: 567,
  projects: 42,
  skills: ["React", "TypeScript", "Node.js", "MongoDB", "AWS"],
  pinnedProjects: [
    {
      title: "AI Task Manager",
      description: "A smart task management system powered by artificial intelligence",
      image: "/placeholder.svg",
      likes: 128,
      comments: 32,
      tags: ["React", "TypeScript", "AI"],
    },
    {
      title: "Blockchain Voting",
      description: "Secure and transparent voting system using blockchain technology",
      image: "/placeholder.svg",
      likes: 256,
      comments: 64,
      tags: ["Blockchain", "Solidity", "Web3"],
    }
  ],
  achievements: [
    { name: "Top Collaborator", description: "Recognized for outstanding collaboration" },
    { name: "React Specialist", description: "Demonstrated expertise in React development" }
  ],
  activities: [
    { type: "project", text: "Uploaded a new project: 'AI Task Manager'", date: "2 days ago" },
    { type: "comment", text: "Commented on 'Blockchain Voting System'", date: "5 days ago" },
    { type: "achievement", text: "Earned the 'Top Collaborator' badge", date: "1 week ago" }
  ]
};

export default function Profile() {
  return (
    <div className="min-h-screen bg-background">
      {/* Profile Header */}
      <div className="w-full bg-gradient-to-r from-primary/10 to-primary/5 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="w-32 h-32">
              <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
              <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold">{mockUser.name}</h1>
              <p className="text-muted-foreground">{mockUser.username}</p>
              <p className="mt-2 text-lg">{mockUser.bio}</p>
              
              <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                <MapPin className="w-4 h-4" />
                <span className="text-muted-foreground">{mockUser.location}</span>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <Button className="gap-2">
                  <UserPlus className="w-4 h-4" />
                  Follow
                </Button>
                <Button variant="outline" className="gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message
                </Button>
              </div>
              
              <div className="flex gap-6 mt-6">
                <div className="text-center">
                  <div className="font-bold">{mockUser.followers.toLocaleString()}</div>
                  <div className="text-muted-foreground">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">{mockUser.following.toLocaleString()}</div>
                  <div className="text-muted-foreground">Following</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">{mockUser.projects}</div>
                  <div className="text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {mockUser.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Connect</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockUser.achievements.map((achievement) => (
                    <div key={achievement.name} className="flex items-start gap-3">
                      <div className="mt-1">
                        <Star className="w-5 h-5 text-yellow-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{achievement.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pinned Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Pinned Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockUser.pinnedProjects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activity Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockUser.activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                      <div className="flex-1">
                        <p>{activity.text}</p>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
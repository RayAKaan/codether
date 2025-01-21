import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";

const featuredProjects = [
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
  },
  {
    title: "Social Media Analytics",
    description: "Advanced analytics dashboard for social media platforms",
    image: "/placeholder.svg",
    likes: 512,
    comments: 128,
    tags: ["Analytics", "Dashboard", "Data"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="text-center mb-16 fade-in">
          <h1 className="text-4xl font-bold mb-4">
            Showcase Your Code to the World
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join a community of developers sharing and collaborating on innovative projects
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 slide-up">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Index;
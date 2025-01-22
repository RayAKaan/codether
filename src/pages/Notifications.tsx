import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Bell, Heart, MessageSquare, UserPlus } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "like",
    message: "Jane Doe liked your project",
    time: "2 hours ago",
    icon: Heart,
  },
  {
    id: 2,
    type: "comment",
    message: "John Smith commented on your post",
    time: "5 hours ago",
    icon: MessageSquare,
  },
  {
    id: 3,
    type: "follow",
    message: "Alex Johnson started following you",
    time: "1 day ago",
    icon: UserPlus,
  },
];

const Notifications = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Bell className="h-6 w-6" />
          Notifications
        </h1>
        <div className="space-y-4 max-w-2xl mx-auto">
          {notifications.map((notification) => (
            <Card key={notification.id} className="p-4 flex items-center gap-4">
              <div className="bg-muted p-2 rounded-full">
                <notification.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm">{notification.message}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Notifications;
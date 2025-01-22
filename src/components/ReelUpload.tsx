import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";

interface ReelUploadProps {
  onClose: () => void;
  onUpload: (reel: any) => void;
}

export function ReelUpload({ onClose, onUpload }: ReelUploadProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would upload the file to a server
    // For now, we'll just create a mock reel
    const newReel = {
      id: Date.now(),
      title,
      description,
      videoUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      likes: 0,
      comments: 0,
      author: {
        name: "Current User",
        avatar: "https://github.com/shadcn.png",
      },
    };

    onUpload(newReel);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload New Reel</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="hidden"
              id="video-upload"
            />
            <label
              htmlFor="video-upload"
              className="cursor-pointer flex flex-col items-center gap-2"
            >
              <Upload className="h-8 w-8 text-gray-400" />
              <span className="text-sm text-gray-500">
                Click to upload your video
              </span>
            </label>
            {file && <p className="mt-2 text-sm text-gray-500">{file.name}</p>}
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Upload</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
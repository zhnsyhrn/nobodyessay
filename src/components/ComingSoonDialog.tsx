import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ComingSoonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectTitle: string;
}

const ComingSoonDialog = ({ open, onOpenChange, projectTitle }: ComingSoonDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center font-display">{projectTitle}</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-center py-8">
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">This project is coming soon!</p>
            <p className="text-sm text-muted-foreground">
              Check back later for more details.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonDialog;
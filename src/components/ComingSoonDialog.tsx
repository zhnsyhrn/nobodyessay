import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center font-display">{projectTitle}</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-center py-8">
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">{t('coming_soon.title')}</p>
            <p className="text-sm text-muted-foreground">
              {t('coming_soon.description')}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonDialog;
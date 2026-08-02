import React from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
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
      <DialogContent className="sm:max-w-sm p-0 overflow-hidden border-0 shadow-2xl bg-transparent">
        <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10">

          {/* Subtle top gradient accent */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

          {/* Faint background orb */}
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-blue-500/10 dark:bg-blue-400/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-violet-500/10 dark:bg-violet-400/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 px-8 pt-10 pb-8 flex flex-col items-center text-center gap-5">



            {/* Labels */}
            <div className="space-y-1.5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-blue-500 dark:text-blue-400 font-medium">
                Coming Soon
              </p>
              <DialogTitle className="font-display text-xl font-medium tracking-tight text-foreground leading-snug">
                {projectTitle}
              </DialogTitle>
            </div>

            {/* Divider */}
            <div className="w-8 h-px bg-black/10 dark:bg-white/10" />

            {/* Body text */}
            <div className="space-y-1.5">
              <p className="font-jakarta text-sm text-foreground/80 dark:text-white/80 leading-relaxed">
                {t('coming_soon.title')}
              </p>
              <p className="font-jakarta text-[13px] text-muted-foreground leading-relaxed">
                {t('coming_soon.description')}
              </p>
            </div>

            {/* Dismiss button */}
            <button
              onClick={() => onOpenChange(false)}
              className="mt-1 w-full py-2.5 rounded-xl font-jakarta text-sm font-medium bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-foreground/70 dark:text-white/60 hover:text-foreground dark:hover:text-white transition-all duration-200"
            >
              Got it
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonDialog;
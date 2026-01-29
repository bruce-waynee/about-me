import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip";

export function LinkedInButton() {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="group rounded-full h-9 w-9 hover:bg-accent transition-colors"
          >
            <a
              href="https://www.linkedin.com/in/muhamad-ali-mousa-6313413a8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin
                className="
                  h-4 w-4
                  text-foreground
                  transition-all
                  group-hover:text-[#0A66C2]
                "
              />
            </a>
          </Button>
        </TooltipTrigger>

        <TooltipContent side="bottom">
          <span>LinkedIn</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function GitHubButton() {
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
              href="https://github.com/bruce-waynee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <Github
                className="
                  h-4 w-4
                  text-foreground
                  transition-all
                  group-hover:text-[#181717]
                  dark:group-hover:text-white
                "
              />
            </a>
          </Button>
        </TooltipTrigger>

        <TooltipContent side="bottom">
          <span>GitHub</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
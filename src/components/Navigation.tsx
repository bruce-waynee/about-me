import { GitHubButton } from "./GitHubButton";
import { LinkedInButton } from "./LinkedInButton";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  return (
    <header className="container flex h-14 max-w-2xl items-center justify-between pt-6 mb-10">
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-semibold">Muhamad Ali Mousa</h1>
        </div>
        
        <nav className="flex items-center space-x-1">
          <LinkedInButton />
          <GitHubButton />
          <ThemeToggle />
        </nav>
   
    </header>
  );
}

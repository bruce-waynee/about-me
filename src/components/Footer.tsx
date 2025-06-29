export function Footer() {
    return (
      <footer className="mt-8 py-8">
        <div className="container max-w-2xl mx-auto flex justify-between items-center text-sm text-muted-foreground">
          <span>Muhamad Ali Mousa</span>
          <a 
            href="https://github.com/bruce-waynee/about-me" 
            className="hover:text-foreground transition-colors underline"
          >
            Source
          </a>
        </div>
      </footer>
    );
  }
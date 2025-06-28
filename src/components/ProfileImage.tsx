

type ProfileImageProps = {
  className?: string;
};

export function ProfileImage({ className = "" }: ProfileImageProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-muted border-4 border-background shadow-lg overflow-hidden flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
        </div>
      </div>
    </div>
  );
}
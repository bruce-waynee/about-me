import { Navigation } from "@/components/Navigation";
import { ProfileImage } from "@/components/ProfileImage";
import { useIsMobile } from "@/hooks/use-mobile";
import { Footer } from "@/components/Footer";

const Index = () => {

  const isMobile = useIsMobile();
  return (
    <div className="min-h-screen bg-background">
    <Navigation />

    <main className="container max-w-2xl mx-auto">
      <div className="animate-fade-in">
        {/* About Section */}
        <section className="mx-auto">
          <h2 className="text-2xl font-bold">About</h2>
          <div className="mt-5">
            {/* Mobile: Centered above text */}
            {isMobile && (
              <div className="flex justify-center mb-6">
                <ProfileImage />
              </div>
            )}

            <div className="space-y-6 text-base leading-relaxed text-foreground/90">
              {/* Desktop: Float right */}
              {!isMobile && (
                <ProfileImage className="float-right ml-6 mb-2" />
              )}

              <p>
                I’m a software engineer based in Braunschweig, Germany. I owe much of my early career to point-of-sale systems, and the intersection of software and real-world retail.
              </p>

              <p>
                I began my journey at the fashion company NewYorker, where I completed my training as an Application Developer. My focus was on building and maintaining POS and cash register solutions — systems that had to be fast, stable, and precise.
              </p>

              <p>
                During this time, I also developed a strong interest in system administration and networking. I worked with Active Directory, managed user permissions and server structures, and gained foundational experience with Windows Server environments.
              </p>

              <p>
                As I grew into a full-stack role, I began working with .NET (C#) and MS SQL to build business-critical applications with a clean architectural approach. I later expanded my toolkit with Angular, React, and WPF — developing both web and desktop interfaces for diverse use cases.
              </p>

              <p>
                I’ve always been drawn to tools that improve the way developers and teams work. This led me to experiment with DevOps, using Docker, Kubernetes, and GitLab CI/CD to streamline deployments and scale applications reliably.
              </p>
            </div>
            </div>

            {/* Technical Contributions Section */}
            <div className="pt-8">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Technical contributions
              </h2>

              <div className="space-y-4 text-base leading-relaxed text-foreground/90">
                <div className="flex items-start space-x-3">
                  <span className="text-muted-foreground mt-2">–</span>
                  <p>
                    Built and maintained POS and cash register systems used in live retail environments
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-muted-foreground mt-2">–</span>
                  <p>
                    Developed full-stack business applications using .NET (C#) and MS SQL, with layered and maintainable architecture
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-muted-foreground mt-2">–</span>
                  <p>
                    Designed a custom time tracking tool aimed at improving productivity in small teams
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-muted-foreground mt-2">–</span>
                  <p>
                    Built full-stack applications using .NET (C#) and MS SQL, focusing on clean architecture and maintainability.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-muted-foreground mt-2">–</span>
                  <p>
                    Built UIs with WPF, Angular, and React, focusing on responsive, user-friendly experiences
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-muted-foreground mt-2">–</span>
                  <p>
                    Designed clickable UI/UX prototypes and design systems with Figma and Framer
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-muted-foreground mt-2">–</span>
                  <p>
                    Set up and maintained CI/CD pipelines using Docker, Kubernetes, and GitLab
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-muted-foreground mt-2">–</span>
                  <p>
                    Gained hands-on experience with Active Directory, network permissions, and system-level administration
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-muted-foreground mt-2">–</span>
                  <p>
                  Routinely use Jira and Confluence for project planning and documentation workflows
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

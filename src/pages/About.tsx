import { Navigation } from "@/components/Navigation";
import { ProfileImage } from "@/components/ProfileImage";
import { useIsMobile } from "@/hooks/use-mobile";
import { Footer } from "@/components/Footer";

const About = () => {
  const isMobile = useIsMobile()
  
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
                  I’m a freshly graduated application developer, trained in Germany
                  as an Application Developer (IHK), with a strong interest in
                  building reliable and well-structured software. While I’m still
                  early in my career, I already have hands-on experience working
                  with real production systems and learning how software behaves
                  outside of tutorials and side projects.
                </p>

                <p>
                  During my professional training at a large retail company, I worked
                  on business-critical applications used daily in live environments,
                  including point-of-sale systems and internal tools. I contributed
                  to backend development using C# and .NET, built REST APIs, developed
                  desktop applications with WPF, and worked on web frontends using
                  Angular and TypeScript.
                </p>

                <p>
                  Being close to real retail processes taught me an important lesson
                  early on: software needs to be stable, understandable, and built
                  with the future in mind. Small decisions in structure, performance,
                  or error handling can have a big impact when systems are used every
                  day in production.
                </p>

                <p>
                  Alongside development, I gained exposure to modern workflows and
                  DevOps basics. I worked with Git and GitLab, used CI/CD pipelines,
                  containerized applications with Docker, and explored Kubernetes to
                  better understand how applications are deployed and scaled. This
                  helped me see the bigger picture, from writing code to getting it
                  safely into production.
                </p>

                <p>
                  AI and automation are at the core of how I think about software, 
                  not as add-ons, but as fundamental tools to make processes smarter a
                  nd more impactful. I actively use tools like ChatGPT, Claude, Perplexity, 
                  and Gemini daily to optimize workflows, solve problems faster, 
                  and develop new ideas. I also experiment with n8n to build AI-powered 
                  automation workflows and have hands-on experience integrating LLM APIs 
                  from OpenAI, Anthropic, and Google into real applications."
                </p>

                <p>
                  Technically, my foundation is strongest in software development
                  principles and the .NET ecosystem, but I’m continuously expanding
                  my skill set. I enjoy learning by doing, combining structured
                  courses like <em>AI for Everyone</em> and{" "}
                  <em>Google AI Prompting Essentials</em> with hands-on experimentation.
                </p>

                <p>
                  I care about clean code, clear architecture, and solutions that make 
                  sense not only to computers but also to people. Furthermore, I’m motivated 
                  by challenging problems, modern tools, and projects where software has a 
                  real-world impact. This blog is my space to document what I’m learning, building, 
                  and exploring as I grow into the field.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
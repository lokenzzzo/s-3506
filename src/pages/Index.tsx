
import { ArrowRight, Zap, Target, Globe, Clock, Send, Palette, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Index = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:ask@kairoscreates.com?subject=New Project Inquiry&body=Hi Kairos team, I'm interested in starting a project with you.";
  };

  return (
    <div className="min-h-screen bg-background dark">
      {/* Hero Section */}
      <main className="h-[150vh] flex items-center justify-center relative text-[#fefcf2] overflow-hidden">
        {/* Miami retro gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5D34A5] via-[#FF007F] to-[#00E0FF] opacity-90 z-0"></div>
        
        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] z-10 opacity-40 mix-blend-overlay"></div>
        
        {/* Grid lines overlay for futuristic touch */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9zdmc+')] z-20 opacity-30"></div>
        
        <div className="text-center px-4 relative z-30">
          <img 
            src="/lovable-uploads/f6f29824-a123-496f-98bb-c10730cdf8b4.png"
            alt="Kairos Creative Studio"
            className="w-full max-w-[300px] md:max-w-none md:h-[144px] mx-auto mb-4 object-contain"
          />
          <p className="text-xl md:text-2xl font-light mb-8">
            Where strategy meets creativity at the perfect moment
          </p>
          <a 
            href="mailto:ask@kairoscreates.com?subject=New Project Inquiry&body=Hi Kairos team, I'm interested in starting a project with you."
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#fefcf2] text-[#161618] rounded-full hover:bg-[#fefcf2]/90 transition-colors"
            onClick={handleEmailClick}
          >
            Start your project <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </main>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 relative bg-[#fefcf2] text-[#161618]" id="services">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20 mix-blend-multiply"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-cooper mb-16 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Palette className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-cooper mb-4">Branding & Visual Identity</h3>
              <p className="text-lg text-[#161618]/80">
                Strategic brand identities that tell your story and leave a lasting impact
              </p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-cooper mb-4">Social Media Management</h3>
              <p className="text-lg text-[#161618]/80">
                Building communities and driving engagement with creative strategies
              </p>
            </div>
            <div className="text-center">
              <Send className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-cooper mb-4">Content Creation</h3>
              <p className="text-lg text-[#161618]/80">
                High-quality visuals and copy that captivate and convert
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 relative text-[#fefcf2]" id="about">
        {/* Retro background with sunset gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161618] via-[#5D34A5] to-[#FF007F] z-0"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9zdmc+')] z-10 opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-cooper mb-8">Creative Timing Meets Bold Innovation</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Kairos—the Greek concept of the perfect moment—guides our approach to branding and digital storytelling. We fuse sleek modern minimalism with vibrant retro-inspired aesthetics, ensuring every piece of content stands out.
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#fefcf2] rounded-full hover:bg-[#fefcf2] hover:text-[#161618] transition-colors"
            >
              Learn our story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative bg-[#fefcf2] text-[#161618]">
        {/* Subtle cyan accent at the top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#00E0FF] z-10"></div>
        
        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30 mix-blend-multiply"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-cooper mb-16 text-center">Why Choose Kairos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-[#fefcf2] to-[#fefcf2]/80 backdrop-blur-sm rounded-lg shadow-sm">
              <Target className="w-8 h-8 mx-auto mb-4 text-[#5D34A5]" />
              <h3 className="text-xl font-semibold mb-2">Innovative Thinking</h3>
              <p className="text-[#161618]/80">We don't do generic; we craft custom solutions that set you apart</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#fefcf2] to-[#fefcf2]/80 backdrop-blur-sm rounded-lg shadow-sm">
              <Clock className="w-8 h-8 mx-auto mb-4 text-[#FF007F]" />
              <h3 className="text-xl font-semibold mb-2">Perfect Timing</h3>
              <p className="text-[#161618]/80">We deliver content when it matters most</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#fefcf2] to-[#fefcf2]/80 backdrop-blur-sm rounded-lg shadow-sm">
              <Zap className="w-8 h-8 mx-auto mb-4 text-[#FFC857]" />
              <h3 className="text-xl font-semibold mb-2">Passionate Creators</h3>
              <p className="text-[#161618]/80">Our team lives and breathes creativity</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#fefcf2] to-[#fefcf2]/80 backdrop-blur-sm rounded-lg shadow-sm">
              <BarChart className="w-8 h-8 mx-auto mb-4 text-[#00A896]" />
              <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-[#161618]/80">We optimize, track, and refine to ensure measurable success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-24 relative text-[#fefcf2]" id="contact">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#161618] via-[#00A896] to-[#00E0FF] z-0"></div>
        
        {/* Retro grid lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9zdmc+')] opacity-50 z-10"></div>
        
        {/* Subtle grain texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30 z-20 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 text-center relative z-30">
          <h2 className="text-4xl font-cooper mb-8">Let's Create Something Extraordinary</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to elevate your brand at the perfect moment?
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:ask@kairoscreates.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#fefcf2] text-[#161618] rounded-full hover:bg-[#fefcf2]/90 transition-colors"
              onClick={handleEmailClick}
            >
              ask@kairoscreates.com <Send className="w-4 h-4" />
            </a>
            <a 
              href="mailto:ask@kairoscreates.com?subject=New Project Inquiry&body=Hi Kairos team, I'm interested in starting a project with you."
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#fefcf2] rounded-full hover:bg-[#fefcf2] hover:text-[#161618] transition-colors"
              onClick={handleEmailClick}
            >
              Start your project <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

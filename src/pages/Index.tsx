
import { ArrowRight, Zap, Target, Globe, Clock, Send, Palette, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      {/* Hero Section */}
      <main className="h-screen flex items-center justify-center bg-[#161618] text-[#fefcf2]">
        <div className="text-center">
          <img 
            src="/lovable-uploads/f6f29824-a123-496f-98bb-c10730cdf8b4.png"
            alt="Kairos Creative Studio"
            className="h-48 mx-auto mb-4"
          />
          <p className="text-2xl font-light mb-8">
            Where strategy meets creativity at the perfect moment
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#fefcf2] text-[#161618] rounded-full hover:bg-[#fefcf2]/90 transition-colors"
          >
            Start your project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      {/* Services Section */}
      <section className="py-24 bg-[#fefcf2] text-[#161618]">
        <div className="container mx-auto px-4">
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
      <section className="py-24 bg-[#161618] text-[#fefcf2]">
        <div className="container mx-auto px-4">
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
      <section className="py-24 bg-[#fefcf2] text-[#161618]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-cooper mb-16 text-center">Why Choose Kairos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Target className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovative Thinking</h3>
              <p className="text-[#161618]/80">We don't do generic; we craft custom solutions that set you apart</p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Perfect Timing</h3>
              <p className="text-[#161618]/80">We deliver content when it matters most</p>
            </div>
            <div className="text-center p-6">
              <Zap className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Passionate Creators</h3>
              <p className="text-[#161618]/80">Our team lives and breathes creativity</p>
            </div>
            <div className="text-center p-6">
              <BarChart className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-[#161618]/80">We optimize, track, and refine to ensure measurable success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#161618] text-[#fefcf2]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-cooper mb-8">Let's Create Something Extraordinary</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to elevate your brand at the perfect moment?
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:ask@kairoscreates.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#fefcf2] text-[#161618] rounded-full hover:bg-[#fefcf2]/90 transition-colors"
            >
              ask@kairoscreates.com <Send className="w-4 h-4" />
            </a>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#fefcf2] rounded-full hover:bg-[#fefcf2] hover:text-[#161618] transition-colors"
            >
              Start your project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

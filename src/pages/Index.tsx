
import { ArrowRight, Zap, Target, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      {/* Hero Section */}
      <main className="h-screen flex items-center justify-center bg-[#161618] text-[#fefcf2]">
        <div className="text-center">
          <h1 className="text-8xl font-cooper uppercase font-black mb-4">
            Kairos
          </h1>
          <p className="text-2xl font-light mb-8">
            The perfect time is now
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
              <Zap className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-cooper mb-4">Digital Marketing</h3>
              <p className="text-lg text-[#161618]/80">
                Strategic campaigns that drive real results and engagement
              </p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-cooper mb-4">Brand Strategy</h3>
              <p className="text-lg text-[#161618]/80">
                Compelling brand narratives that resonate with your audience
              </p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-cooper mb-4">Web Design</h3>
              <p className="text-lg text-[#161618]/80">
                Beautiful, functional websites that convert visitors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#161618] text-[#fefcf2]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-cooper mb-8">Why Kairos?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Kairos represents the perfect moment for action. In a world of endless possibilities, we help brands seize their moment and make a lasting impact.
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

      {/* Contact Section */}
      <section className="py-24 bg-[#fefcf2] text-[#161618]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-cooper mb-8">Ready to Begin?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            The perfect moment to transform your brand is now. Let's create something extraordinary together.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#161618] text-[#fefcf2] rounded-full hover:bg-[#161618]/90 transition-colors"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;

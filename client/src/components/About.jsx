import React, { useState, useEffect } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = React.useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsInView(true);
          } else {
            setStatsInView(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Counter Animation Component
  const StatItem = ({ end, suffix, label, delay }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsInView) {
        setCount(0);
        return;
      }

      const timer = setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = end / steps;
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= end) {
            setCount(end);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }, [statsInView, end, delay]);

    return (
      <div className="flex-1 text-center px-6 py-4 relative group">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/20 group-first:hidden"></div>
        <div className="transform group-hover:scale-110 transition-transform duration-300">
          <div className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
            {count.toLocaleString()}{suffix}
          </div>
          <div className="text-gray-300 text-sm md:text-lg font-semibold tracking-wide uppercase">
            {label}
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    );
  };

  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #434343 100%)'
      }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 relative inline-block">
            About Us
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          </h2>
          <p className="text-gray-300 text-base md:text-lg mt-8 max-w-2xl mx-auto">
            Where Ideas Meet Opportunity
          </p>
        </div>

        {/* Main Content - Split Design */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Our Mission Card (MORE FAINT) */}
          <div 
            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative bg-gradient-to-br from-[#434343]/10 via-[#434343]/5 to-[#000000]/10 backdrop-blur-md border border-[#434343]/20 rounded-3xl p-12 hover:border-[#434343]/30 transition-all duration-300 overflow-hidden">
              
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#434343]/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#434343]/15 px-4 py-2 rounded-full mb-6">
                  <div className="w-2 h-2 bg-[#434343] rounded-full"></div>
                  <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Our Mission</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Nurturing
                  <span className="block text-gray-400">
                    Entrepreneurial Spirit
                  </span>
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  E-Cell SKNCOE creates a vibrant ecosystem of learning, collaboration, and growth. We transform students into innovators and dreamers into founders.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Stacked Cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div 
              className={`relative bg-gray-700/20 backdrop-blur-sm border border-gray-500/30 rounded-2xl p-8 hover:bg-gray-700/30 hover:border-gray-400/50 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-gray-400 to-transparent group-hover:h-full transition-all duration-500"></div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center group-hover:bg-gray-500/40 transition-all duration-300">
                  <div className="w-6 h-6 border-2 border-gray-400 rounded-lg"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Events & Experiences</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We plan and execute engaging events that bring students, speakers, and ideas together—ensuring seamless coordination and impactful experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              className={`relative bg-gray-600/20 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8 hover:bg-gray-600/30 hover:border-gray-500/50 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-gray-500 to-transparent group-hover:h-full transition-all duration-500"></div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-600/20 rounded-xl flex items-center justify-center group-hover:bg-gray-600/40 transition-all duration-300">
                  <div className="w-6 h-6 border-2 border-gray-500 rounded-lg rotate-45"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Pitch Competitions</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Showcase your ideas and connect with industry leaders, investors, and fellow innovators.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              className={`relative bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-8 hover:bg-white/20 hover:border-white/50 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-white to-transparent group-hover:h-full transition-all duration-500"></div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/40 transition-all duration-300">
                  <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Industry Connections</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Build meaningful relationships with successful entrepreneurs and gain insights from their journeys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Stats Bar */}
        <div 
          ref={statsRef}
          className={`relative overflow-hidden transition-all duration-1000 -mx-6 backdrop-blur-sm border-t border-b border-gray-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          style={{ transitionDelay: '1000ms' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 via-gray-600/20 to-gray-700/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
          
          <div className="relative z-10 px-8 md:px-12 py-12">
            <div className="flex flex-col md:flex-row items-center justify-around gap-4">
              <StatItem 
                end={1000} 
                suffix="+" 
                label="Events Participated"
                delay={50}
              />
              <StatItem 
                end={10} 
                suffix="+" 
                label="Events Organized"
                delay={50}
              />
              <StatItem 
                end={150} 
                suffix="+" 
                label="Active Members"
                delay={50}
              />
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/30"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/30"></div>
        </div>
      </div>
    </section>
  );
}
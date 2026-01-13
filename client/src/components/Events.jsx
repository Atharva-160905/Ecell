import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { eventsData } from '@/data/eventsdata';

// Event Card Component
const EventCard = ({ event, index }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [index]);

  const borderPatterns = [
    'rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-lg rounded-bl-lg',
    'rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-lg rounded-br-lg',
    'rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-xl rounded-bl-xl',
    'rounded-tr-[1.5rem] rounded-bl-[1.5rem] rounded-tl-xl rounded-br-xl',
    'rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-lg rounded-bl-lg'
  ];

  const handleClick = () => {
    navigate(`/Eachevent/${event.slug}`);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-gradient-to-br from-[#000000] to-[#434343] border border-[#434343]/30 overflow-hidden hover:border-[#434343]/60 transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
        borderPatterns[index % borderPatterns.length]
      } ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onClick={handleClick}
    >
      {/* Subtle gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-tr from-[#000000]/0 via-[#434343]/10 to-[#000000]/0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

      {/* Image Container - Clearer image with lighter overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        {/* Lighter gradient - only at bottom for badges visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent"></div>
        
        {/* Category badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#434343]/90 px-3 py-1.5 rounded-full backdrop-blur-sm">
          <Sparkles size={12} className="text-white" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">{event.category}</span>
        </div>

        {/* Highlight badge */}
        <div className="absolute bottom-3 right-3 bg-[#000000]/80 px-3 py-1 rounded-full border border-[#434343]/50 backdrop-blur-sm">
          <span className="text-xs font-semibold text-white">{event.highlight}</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-4 z-10">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
          {event.title}
        </h3>

        <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
          {event.description}
        </p>

        {/* Decorative line with icon */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 h-px bg-gradient-to-r from-[#434343]/50 to-transparent"></div>
          <Zap size={14} className="text-gray-500" />
          <div className="flex-1 h-px bg-gradient-to-l from-[#434343]/50 to-transparent"></div>
        </div>

        {/* Explore Button */}
        <div className="inline-flex items-center gap-2 bg-[#434343] text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-[#434343]/80 transition-all duration-300 group-hover:gap-3">
          Explore Event
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
    </div>
  );
};

// Main Events Section Component
export default function EventsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="events"
      className="relative min-h-screen py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #434343 100%)'
      }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="inline-block mb-4">
            <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">
              What We Organize
            </span>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent mt-2"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 relative inline-block">
            Our Events
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-8 max-w-2xl mx-auto">
            Experience innovation, collaboration, and growth through our flagship events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {eventsData.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
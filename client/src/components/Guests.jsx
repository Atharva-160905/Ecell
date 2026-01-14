import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Linkedin, Sparkles } from "lucide-react";
import rajshamani from "../assets/Guest/Raj_Shamani_DSC00824_BG.jpg";
import prajaktakoli from "../assets/Guest/prajakta koli.jpg";
import pranitmore from "../assets/Guest/more pranit.jpg";
import ishansharma from "../assets/Guest/ishan sharma.jpg";
import ashish from "../assets/Guest/ashish bharatvanshi.jpg";
import smonk from "../assets/Guest/radheshyam das.jpg";
const teamMembers = [
  {
    id: 1,
    name: "Raj Shamani",
    role: "Founder, Shamani Industries & Host of the Figuring Out Podcast.",
    image: rajshamani,
    linkedin: "linkedin.com/in/rajshamani",
  },
  {
    id: 2,
    name: "Prajakta Koli",
    role: " Digital Content Creator & Actress",
    image: prajaktakoli,
    linkedin: "https://linkedin.com/in/michaelchen",
  },
  {
    id: 3,
    name: "Pranit More",
    role: "Stand-up Comedian & Professional Content Creator",
    image: pranitmore,

    linkedin: "https://linkedin.com/in/emilyrodriguez",
  },
  {
    id: 4,
    name: "Ishan Sharma",
    role: " Co-founder, MarkitUp & Educational YouTuber",
    image: ishansharma,
    linkedin: "https://linkedin.com/in/davidpark",
  },
  {
    id: 5,
    name: "Radheshyam Das Ji",

    role: " President, ISKCON Pune & Founder of VOICE",
    image: smonk,
    instagram: "https://instagram.com/aishapatel",
    linkedin: "https://linkedin.com/in/aishapatel",
    email: "aisha@company.com",
  },
  {
    id: 6,
    name: "Ashish Bharatvanshi",
    role: "Historian, Digital Educator, and TEDx Speaker.",
    image: ashish,
    linkedin: "https://linkedin.com/in/aishapatel",
  },
];

// Team Member Card Component
const TeamCard = ({ member, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative transition-all duration-500 ${
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-50"
      }`}
    >
      {/* Card Container */}
      <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl overflow-hidden border border-[#434343]/30 shadow-2xl">
        {/* Animated gradient border effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[#434343] via-[#666666] to-[#434343] opacity-0 transition-opacity duration-500 ${
            isHovered ? "opacity-20" : ""
          }`}
        ></div>

        {/* Image Container */}
        <div className="relative" style={{ height: "400px" }}>
          <img
            src={member.image}
            alt={member.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          {/* Subtle gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>

          {/* Role badge inside image */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center gap-2 bg-gradient-to-r from-[#434343]/95 to-[#666666]/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl">
            <Sparkles size={14} className="text-white" />
            <span className="text-xs font-bold text-white uppercase tracking-wider truncate">
              {member.role}
            </span>
          </div>

          {/* Social icons floating */}
          <div
            className={`absolute top-6 right-6 flex flex-col gap-3 transition-all duration-500 ${
              isHovered
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
          >
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#434343] hover:bg-[#666666] p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin size={18} className="text-white" />
            </a>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative p-6 bg-[#0a0a0a]">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 transition-colors">
            {member.name}
          </h3>

          {/* Decorative line */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gradient-to-r from-[#434343] to-transparent"></div>
            <div className="w-2 h-2 bg-[#434343] rounded-full"></div>
            <div className="flex-1 h-px bg-gradient-to-l from-[#434343] to-transparent"></div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#434343] to-transparent transition-all duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

// Main Carousel Component
export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="relative min-h-screen py-20 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #434343 100%)",
      }}
      id="Guests"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-40 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">
              Our
            </span>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent mt-2"></div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 relative inline-block">
            Guests
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-8 max-w-2xl mx-auto"></p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Card Display with Side Arrows */}
          <div className="flex items-center justify-center mb-12">
            {/* Previous Card (Preview) - Hidden on smaller screens */}
            <div
              className="hidden lg:block w-64 opacity-30 hover:opacity-50 transition-opacity cursor-pointer"
              onClick={goToPrevious}
            >
              <TeamCard
                member={
                  teamMembers[
                    (currentIndex - 1 + teamMembers.length) % teamMembers.length
                  ]
                }
                isActive={false}
              />
            </div>

            {/* Left Arrow Button - Next to Current Card */}
            <button
              onClick={goToPrevious}
              className="bg-[#434343] hover:bg-[#666666] text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10 mx-4"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Current Card */}
            <div className="w-full max-w-sm">
              <TeamCard member={teamMembers[currentIndex]} isActive={true} />
            </div>

            {/* Right Arrow Button - Next to Current Card */}
            <button
              onClick={goToNext}
              className="bg-[#434343] hover:bg-[#666666] text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10 mx-4"
            >
              <ChevronRight size={28} />
            </button>

            {/* Next Card (Preview) - Hidden on smaller screens */}
            <div
              className="hidden lg:block w-64 opacity-30 hover:opacity-50 transition-opacity cursor-pointer"
              onClick={goToNext}
            >
              <TeamCard
                member={teamMembers[(currentIndex + 1) % teamMembers.length]}
                isActive={false}
              />
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-[#434343]"
                    : "w-3 h-3 bg-[#434343]/30 hover:bg-[#434343]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

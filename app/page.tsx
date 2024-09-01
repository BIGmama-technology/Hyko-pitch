"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import HykoLogo from "./components/Hykologo";

// Blueprint background component
const BlueprintBackground = () => (
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `
      linear-gradient(to right, #E6F3FF 2px, transparent 1px),
      linear-gradient(to bottom, #E6F3FF 2px, transparent 1px)
    `,
      backgroundSize: "15px 15px",
    }}
  />
);

// Slide 1: Opening
const OpeningSlide = () => (
  <div className="flex flex-col items-center gap-y-8 h-screen text-blue-600 justify-center">
    <BlueprintBackground />
    <HykoLogo />
    <div className="relative text-center z-10 flex-col gap-y-8 max-w-6xl">
      <h2 className="text-4xl font-bold mb-8 z-10">
        We have been building custom AI applications as craftmen for 10 years
      </h2>
      <p className="text-2xl z-10">
        Kwanko - Arkia - Ratp - Total - Sonatrach - Ooredoo - Yourscrib
      </p>
      <p className="text-2xl z-10 mt-10">
        We wanted to scale up and automatize how we build these applications
      </p>
    </div>
  </div>
);

// Slide 2: Problem Statement
const ProblemSlide = () => (
  <div className="flex flex-col items-center justify-center h-screen text-blue-600 p-8">
    <BlueprintBackground />
    <HykoLogo />
    <div className="relative z-10 text-center">
      <h2 className="text-4xl font-bold mb-8">
        What did we learn from 10 years in the ground field ?
      </h2>
      <ul className="text-2xl space-y-6 max-w-6xl mx-auto text-left">
        <li>👥 People cannot formulate their problems clearly in few words.</li>
        <li>🔧 It's hard to articulate a technical solution for a problem.</li>
        <li>🔗 It's difficulte to materilize and share the solution.</li>
      </ul>
    </div>
  </div>
);

// Slide 3: Solution
const SolutionSlide = () => (
  <div className="flex flex-col items-center py-32 h-screen text-blue-600 p-8">
    <BlueprintBackground />
    <HykoLogo />
    <div className="relative z-10 text-center">
      <h2 className="text-4xl font-bold mb-8">Hyko.ai</h2>

      <ul className="text-2xl space-y-6 max-w-6xl mx-auto text-left">
        <li>🧩 Drag and drop AI models/third-party action as nodes</li>
        <li>🔗 Configure the nodes and connect them to build blueprints</li>
        <li>⚡ Run/Share your blueprints from Editor/UI/API</li>
      </ul>
    </div>
  </div>
);
const VideoGrid = () => {
  const videoIds = [
    "CUG6XbjJWkk",
    "DQaMYdOazIQ",
    "LLipFlFK2SI",
    "TDl9jK093sE",
    "e2OtBpoe2kE",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {videoIds.map((id, index) => (
        <iframe
          key={index}
          className="aspect-w-16 aspect-h-9"
          src={`https://www.youtube.com/embed/${id}`}
          allowFullScreen
        ></iframe>
        // </div>
      ))}
    </div>
  );
};

// Slide 4: Examples
const ExampleSlide = () => (
  <div className="flex flex-col items-center justify-center h-screen text-blue-600 p-8">
    <BlueprintBackground />
    <HykoLogo />
    <div className="z-10 text-center">
      <h2 className="text-4xl font-bold mb-8">Our clients are Happy !</h2>
      <VideoGrid />
    </div>
  </div>
);

// Main Slideshow component
const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [OpeningSlide, ProblemSlide, SolutionSlide, ExampleSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CurrentSlide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen">
      <CurrentSlide />
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <ChevronLeft size={24} color="#3B82F6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <ChevronRight size={24} color="#3B82F6" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`inline-block w-3 h-3 rounded-full mx-1 ${
              index === currentSlide ? "bg-blue-600" : "bg-blue-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

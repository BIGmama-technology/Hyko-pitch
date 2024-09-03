"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HykoLogo from "./components/Hykologo";
import IconCloud from "./components/IconCloud";

// Slide 1: Opening
const OpeningSlide = () => (
  <div className="flex w-full flex-col items-center gap-y-8 text-blue-600 justify-center">
    <div className="relative text-center z-10 flex-col gap-y-8 max-w-6xl">
      <h2 className=" text-2xl sm:text-4xl font-bold mb-8 z-10">
        We have been building custom AI applications as craftmen for 10 years
      </h2>
      <p className=" text-xl sm:text-2xl z-10">
        Kwanko - Arkia - Ratp - Total - Sonatrach - Ooredoo - Yourscrib
      </p>
      <p className="text-xl sm:text-2xl z-10 mt-10">
        We wanted to scale up and automatize how we build these applications
      </p>
    </div>
  </div>
);

// Slide 2: Problem Statement
const ProblemSlide = () => (
  <div className="flex w-full flex-col items-center justify-center  text-blue-600 p-8">
    <div className="relative z-10 text-center">
      <h2 className="text-start text-2xl md:text-4xl font-bold mb-8">
        What did we learn from 10 years in the ground field ?
      </h2>
      <ul className="text-xl md:text-2xl space-y-6 max-w-6xl mx-auto text-left">
        <li>👥 People cannot formulate their problems clearly in few words.</li>
        <li>🔧 It's hard to articulate a technical solution for a problem.</li>
        <li>🔗 It's difficulte to materilize and share the solution.</li>
      </ul>
    </div>
  </div>
);

const slugs = [
  "googledocs",
  "googlesheets",
  "airtable",
  "github",
  "gmail",
  "notion",
  "openai",
  "anthropic",
  "google",
  "googlegemini",
  "googledrive",
  "youtube",
  "x",
  "arxiv",
  "cohere",
  "gemini",
  "wikipedia",
  "stabilityai",
  "sheets",
];

// Slide 3: Solution
const SolutionSlide = () => {
  return (
    <div className="grid place-items-center items-center py-16 sm:py-32  text-blue-600 p-8">
      <div className="relative z-10 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8">Hyko.ai</h2>
        <ul className="text-xl sm:text-2xl space-y-6 max-w-6xl mx-auto text-left">
          <li>🧩 Drag and drop AI models/third-party action as nodes</li>
          <li>🔗 Configure the nodes and connect them to build blueprints</li>
          <li>⚡ Run/Share your blueprints from Editor/UI/API</li>
        </ul>
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
};

const HykoSlide = () => {
  const gifs = ["/connect.gif", "/loop_mode.gif", "/appbook.gif"];
  const descriptions = [
    "Connect nodes",
    "Advanced features",
    "Share simple UI",
  ];
  return (
    <div className="flex items-center justify-center py-16">
      <div className="grid  sm:grid-cols-2 grid-col-1  gap-3 mx-auto overflow-hidden">
        {gifs.map((gif, idx) => (
          <div className="max-w-60 sm:max-w-sm object-contain" key={gif}>
            <p className="text-xl sm:text-2xl py-2 text-blue-600">{descriptions[idx]}</p>
            <img
              src={gif}
            // className="z-10 max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const VideoGrid = () => {
  const videoIds = [
    "CUG6XbjJWkk",
    "DQaMYdOazIQ",
    "LLipFlFK2SI",
    "TDl9jK093sE",
    "e2OtBpoe2kE",
  ];

  return (
    <div className="flex flex-wrap gap-2 sm:gap-6">
      {videoIds.map((id, index) => (
        <iframe
          key={index}
          className="aspect-w-16 aspect-h-9 "
          src={`https://www.youtube.com/embed/${id}`}
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
};

// Slide 4: Examples
const ExampleSlide = () => (
  <div className="flex flex-col items-center justify-center text-blue-600">
    <div className="z-10 text-center">
      <h2 className="text-4xl font-bold mb-8">Our clients are Happy !</h2>
      <VideoGrid />
    </div>
  </div>
);

// Main Slideshow component
const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    OpeningSlide,
    ProblemSlide,
    SolutionSlide,
    HykoSlide,
    ExampleSlide,
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CurrentSlide = slides[currentSlide];

  return (

    <div

      style={{
        backgroundImage: `
      linear-gradient(to right, #E6F3FF 2px, transparent 1px),
      linear-gradient(to bottom, #E6F3FF 2px, transparent 1px)
    `,
        backgroundSize: "15px 15px",
      }}
      className="relative w-full inset-0 flex flex-col justify-around  min-h-screen p-4 sm:p-8">
      {/*
        for better ui i encourage removing this
      <HykoLogo />
   */   }
      <div className="flex items-center justify-between max-h-full w-full ">
        <button
          onClick={prevSlide}
          className="bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronLeft size={24} color="#3B82F6" />
        </button>

        <div className="mx-2 flex items-center justify-center">
          <CurrentSlide />
        </div>

        <button
          onClick={nextSlide}
          className="bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronRight size={24} color="#3B82F6" />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`inline-block w-2 h-2 rounded-full mx-1 ${index === currentSlide ? "bg-blue-600" : "bg-blue-300"
              }`}
          />
        ))}
      </div>
    </div>);
};

export default Slideshow;

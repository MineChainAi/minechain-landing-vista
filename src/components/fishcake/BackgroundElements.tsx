
import React from "react";
import { AnimatedParticles } from "./AnimatedParticles";

export const BackgroundElements = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[#080F1D]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#080F1D] opacity-70" />
      <div className="absolute inset-0 bg-dots opacity-10" />
      <AnimatedParticles />
    </>
  );
};

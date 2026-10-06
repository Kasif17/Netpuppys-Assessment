"use client";
import { useEffect, useRef } from "react";
import { useScrollProgress } from "@/lib/hooks";

export default function ScrollProgress() {
  useScrollProgress();
  return (
    <div
      className="scroll-progress-bar"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={0}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}

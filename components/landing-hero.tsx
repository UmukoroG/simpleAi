"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-red-600">
          <TypewriterComponent
            options={{
              strings: [
                "Chat Conversation.",
                "Music Generation.",
                "Code Generator.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Generate content using AI.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full bgfont-semibold bg-[#4d050c]">
            Start
          </Button>
        </Link>
      </div>
    </div>
  );
};

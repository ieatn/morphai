'use client';

import { useState } from 'react';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleDemoClick = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-screen-xl mx-auto px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Create Amazing Characters With AI
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 ml-2">
                Without Coding
              </span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Transform your ideas into stunning character visuals in seconds.
              Perfect for game developers, writers, artists, and creators of all kinds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#get-started"
                className="inline-block rounded-full bg-foreground px-6 py-3 text-base font-medium text-background hover:opacity-90 transition-opacity"
              >
                Get Started For Free
              </a>
              <button
                onClick={handleDemoClick}
                className="inline-flex items-center justify-center rounded-full bg-foreground/10 px-6 py-3 text-base font-medium text-foreground hover:bg-foreground/20 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Watch Demo
                  </>
                )}
              </button>
            </div>
            
            <div className="mt-8 flex items-center text-sm text-foreground/60">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              No credit card required for trial
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto rounded-2xl bg-foreground/5 flex items-center justify-center overflow-hidden border border-foreground/10">
              <div className="grid grid-cols-2 gap-4 p-6">
                {[1, 2, 3, 4].map((idx) => (
                  <div key={idx} className="aspect-square rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-foreground/30">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </div>
  );
} 
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CharacterExample {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}

const exampleCharacters: CharacterExample[] = [
  {
    id: 1,
    name: 'Cyborg Samurai',
    description: 'Futuristic warrior with cybernetic enhancements',
    imageUrl: '/images/character1.png',
    category: 'Sci-Fi'
  },
  {
    id: 2,
    name: 'Forest Guardian',
    description: 'Mystical protector of ancient woodlands',
    imageUrl: '/images/character2.png',
    category: 'Fantasy'
  },
  {
    id: 3,
    name: 'Cosmic Explorer',
    description: 'Space traveler with alien technology',
    imageUrl: '/images/character3.png',
    category: 'Sci-Fi'
  },
  {
    id: 4,
    name: 'Dragon Tamer',
    description: 'Brave hero with the ability to command dragons',
    imageUrl: '/images/character4.png',
    category: 'Fantasy'
  },
  {
    id: 5,
    name: 'Neon Detective',
    description: 'Private investigator in a cyberpunk metropolis',
    imageUrl: '/images/character5.png',
    category: 'Cyberpunk'
  },
  {
    id: 6,
    name: 'Steampunk Inventor',
    description: 'Brilliant creator of Victorian-era technology',
    imageUrl: '/images/character6.png',
    category: 'Steampunk'
  }
];

export default function CharacterExamples() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredCharacter, setHoveredCharacter] = useState<number | null>(null);
  
  const categories = Array.from(new Set(exampleCharacters.map(character => character.category)));
  
  const filteredCharacters = activeCategory 
    ? exampleCharacters.filter(character => character.category === activeCategory)
    : exampleCharacters;
  
  return (
    <section id="examples" className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Character Examples</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Check out these stunning AI-generated characters created with MorphAI. No coding skills required!
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null 
                  ? 'bg-foreground text-background' 
                  : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-foreground text-background' 
                    : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCharacters.map(character => (
            <div 
              key={character.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredCharacter(character.id)}
              onMouseLeave={() => setHoveredCharacter(null)}
            >
              <div className="aspect-square relative bg-foreground/5">
                <div className="absolute inset-0 flex items-center justify-center text-foreground/30">
                  {/* Placeholder for character image */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white transform transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{character.name}</h3>
                  <span className="text-xs bg-foreground/20 px-2 py-1 rounded-full">{character.category}</span>
                </div>
                <p className="mt-2 text-sm text-white/80">{character.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="#get-started"
            className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
          >
            Create Your Characters
            <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 
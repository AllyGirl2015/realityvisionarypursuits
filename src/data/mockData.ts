export interface Author {
  id: string;
  name: string;
  slug: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Work {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  authorId: string;
  date: string;
}

export interface Quote {
  text: string;
  authorId: string;
  tags: string[];
}

export const authors: Author[] = [
  {
    id: "1",
    name: "Alissa Robbin",
    slug: "alissa-robbin",
    role: "Founder & Visionary",
    bio: "Exploring the boundaries of reality through art, philosophy, and digital expression. Believes that chaos is just order waiting to be deciphered.",
  }
];

export const works: Work[] = [
  {
    id: "1",
    title: "The Architecture of Dreams",
    slug: "architecture-of-dreams",
    description: "An exploration of how our subconscious builds the worlds we visit at night, and what they tell us about our waking life.",
    category: "Philosophy",
    tags: ["Dreams", "Consciousness", "Surrealism"],
    authorId: "1",
    date: "2024-11-15",
    content: `
      <h2>Building the Impossible</h2>
      <p>In dreams, gravity is a suggestion, not a law. We construct cities of glass that float on clouds and bridges made of light. This architectural freedom reflects the limitless potential of the human mind when unshackled from physical constraints.</p>
      
      <h2>The Blueprint of the Soul</h2>
      <p>Every corridor and room in a dream represents a facet of our psyche. To navigate a dream is to explore the self. Are we the architects, or merely the inhabitants of a structure built by something deeper?</p>
    `
  }
];

export const quotes: Quote[] = [
  {
    text: "We are the universe experiencing itself, and sometimes it's a very confusing experience.",
    authorId: "1",
    tags: ["Universe", "Philosophy"]
  }
];

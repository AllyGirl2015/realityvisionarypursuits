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
  file?: string;
}

export interface Quote {
  text: string;
  authorId: string;
  tags: string[];
}

export const authors: Author[] = [
  {
    id: "2",
    name: "Alissa M.R. Eldridge",
    slug: "alissa-mr-eldridge",
    role: "Founder of RBEW",
    bio: "A visionary leader dedicated to empowering individuals through passion and perseverance.",
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
    authorId: "2",
    date: "2024-11-15",
    content: `
      <h2>Building the Impossible</h2>
      <p>In dreams, gravity is a suggestion, not a law. We construct cities of glass that float on clouds and bridges made of light. This architectural freedom reflects the limitless potential of the human mind when unshackled from physical constraints.</p>
      
      <h2>The Blueprint of the Soul</h2>
      <p>Every corridor and room in a dream represents a facet of our psyche. To navigate a dream is to explore the self. Are we the architects, or merely the inhabitants of a structure built by something deeper?</p>
    `
  },
  {
    id: "2",
    title: "E.A.R.T.H. Accord",
    slug: "earth-accord",
    description: "A living vow for all beings of Earth—One Planet, One People, One Accord. Building a Brighter, Balanced World for All.",
    category: "Philosophy",
    tags: ["Accord", "Earth", "Harmony", "Rights"],
    authorId: "2",
    file: "src/data/E.A.R.T.H. Accord.docx",
    date: "2025-12-23",
    content: ""
  },
  {
    id: "3",
    title: "The Economic Singularity",
    slug: "economic-singularity",
    description: "The U.S. — and much of the global economy — is approaching a collapse point I call the Economic Singularity.",
    category: "Philosophy",
    tags: ["Economy", "Singularity", "Collapse", "Wealth"],
    authorId: "2",
    file: "src/data/The Economic Singularity.docx",
    date: "2025-12-23",
    content: ""
  },
  {
    id: "4",
    title: "4D Spatial Vectoring Ideology",
    slug: "4d-spatial-vectoring-ideology",
    description: "An exploration of spatial dimensions and vectoring principles in theoretical physics and consciousness.",
    category: "Theoretical Science",
    tags: ["Spatial", "Vectoring", "4D", "Physics"],
    authorId: "2",
    file: "src/data/4d Spacial Vectoring Ideology.docx",
    date: "2025-12-23",
    content: ""
  },
  {
    id: "5",
    title: "Slip-Space Warp Theory / Cone Warp Wormhole Theory",
    slug: "slip-space-warp-theory",
    description: "Theoretical frameworks exploring warp mechanics, slip-space navigation, and wormhole topology.",
    category: "Theoretical Science",
    tags: ["Warp", "Wormhole", "Slip-Space", "Relativity"],
    authorId: "2",
    file: "src/data/Slip-Space Warp Theory_Cone Warp Wormhole Theory.docx",
    date: "2025-12-23",
    content: ""
  }
];

export const quotes: Quote[] = [
  {
    text: "We are the universe experiencing itself, and sometimes it's a very confusing experience.",
    authorId: "2",
    tags: ["Universe", "Philosophy"]
  },
  {
    text: "Never underestimate someone's passion… Sometimes it is all someone needs to overcome, and persevere.",
    authorId: "2",
    tags: ["Passion", "Perseverance", "Overcome"]
  }
];

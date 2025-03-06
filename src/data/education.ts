export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024—Present",
    institution: "Simon Fraser University (SFU)",
    degree: "Ph.D. in Computer Science",
    // advisor: "Prof. Andrea Tagliasacchi",
  },
  {
    year: "2021—2023",
    institution: "Simon Fraser University (SFU)",
    degree: "Ph.D. in Engineering Science",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2017—2020",
    institution: "University of Tehran",
    degree: "M.Sc. in Electrical Engineering",
    thesis: "Contol of Computer Mouse via Hand Gesture Recognition",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2012—2017",
    institution: "Amirkabir University of Technology (Tehran Polytechnic)",
    degree: "B.Sc. in Electrical Engineering (Control)",
    thesis: "Analyzing Driver's Consciousness Levels Using EEG Signals",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];

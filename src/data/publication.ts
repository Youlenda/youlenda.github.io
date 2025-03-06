export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "TPAMI",
    title: "Rate-Distortion Theory in Coding for Machines and its Application",
    authors: "Alon Harell, Yalda Foroutan, Nilesh Ahuja, Parual Datta, Bhavya Kanzariya, V. Srinivasa Somayazulu, Omesh Tickoo, Anderson de Andrade, Ivan V. Bajic",
    paperUrl: "https://arxiv.org/pdf/2305.17295",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Extending rate-distortion theory for machine-vision codecs.",
    // imageUrl:
      // "/images/rd.jpg",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2024",
    conference: "arXiv",
    title: "Evaluating Alternatives to SFM Point Cloud Initialization for Gaussian Splatting",
    authors: "Yalda Foroutan, Daniel Rebain, Kwang Moo Yi, Andrea Tagliasacchi",
    paperUrl: "https://theialab.github.io/nerf-3dgs/",
    // codeUrl: "https://github.com/jsmith/robust-causal-discovery",
    tldr: "Utilizing a NeRF to guide the optimization of a 3D Gaussian Splatting as an alternative to SfM initialization.",
  },
  {
    year: "2023",
    conference: "ICIP",
    title: "Base Layer Efficiency in Scalable Human-machine Coding",
    authors: "Yalda Foroutan, Alon Harell, Anderson de Andrade, Ivan V Bajić",
    paperUrl: "https://arxiv.org/pdf/2307.02430",
    tldr: "Enhancing base-layer training to achieve significant rate savings across multiple computer vision tasks.",
  },
  // {
  //   year: "2025",
  //   conference: "TPAMI",
  //   title: "Rate-Distortion Theory in Coding for Machines and its Application",
  //   authors: "Alon Harell, Yalda Foroutan, Nilesh Ahuja, Parual Datta, Bhavya Kanzariya, V. Srinivasa Somayazulu, Omesh Tickoo, Anderson de Andrade, Ivan V. Bajic",
  //   paperUrl: "https://arxiv.org/pdf/2305.17295",
  //   tldr: "Extending rate-distortion theory for machine-vision codecs.",
  // },
  // {
  //   year: "2025",
  //   conference: "TPAMI",
  //   title: "Rate-Distortion Theory in Coding for Machines and its Application",
  //   authors: "Alon Harell, Yalda Foroutan, Nilesh Ahuja, Parual Datta, Bhavya Kanzariya, V. Srinivasa Somayazulu, Omesh Tickoo, Anderson de Andrade, Ivan V. Bajic",
  //   paperUrl: "https://arxiv.org/pdf/2305.17295",
  //   tldr: "Extending rate-distortion theory for machine-vision codecs.",
  // },
];

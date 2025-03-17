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
    authors: "Alon Harell, Yalda Foroutan, Nilesh Ahuja, Parual Datta, Bhavya Kanzariya, V. Srinivasa Somayazulu, Omesh Tickoo, Anderson de Andrade, Ivan V. Bajić",
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
    title: "Evaluating Alternatives to SfM Point Cloud Initialization for Gaussian Splatting",
    authors: "Yalda Foroutan, Daniel Rebain, Kwang Moo Yi, Andrea Tagliasacchi",
    paperUrl: "https://theialab.github.io/nerf-3dgs/",
    // codeUrl: "https://github.com/jsmith/robust-causal-discovery",
    tldr: "Utilizing a NeRF to guide the optimization of 3D Gaussian Splatting as an alternative to SfM initialization.",
  },
  {
    year: "2023",
    conference: "ICIP",
    title: "Base Layer Efficiency in Scalable Human-machine Coding",
    authors: "Yalda Foroutan, Alon Harell, Anderson de Andrade, Ivan V. Bajić",
    paperUrl: "https://arxiv.org/pdf/2307.02430",
    tldr: "Enhancing base-layer training to achieve significant rate savings across multiple computer vision tasks.",
  },
  {
    year: "2023",
    conference: "ICMEW",
    title: "VVC+M: Plug and Play Scalable Image Coding for Humans and Machines",
    authors: "Alon Harell, Yalda Foroutan, Ivan V. Bajić",
    paperUrl: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10222865",
    tldr: "Improving residual coding in scalable human-machine systems through interprediction coding from a video codec.",
  },
  {
    year: "2023",
    conference: "ICMEW",
    title: "Conditional and Residual Methods in Scalable Coding for Humans and Machines",
    authors: "Anderson de Andrade, Alon Harell, Yalda Foroutan, Ivan V. Bajić",
    paperUrl: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10222456",
    tldr: "Presenting conditional and residual methods for scalable coding for both humans and machine.",
  },
  {
    year: "2020",
    conference: "arXiv",
    title: "Control of Computer Pointer Using Hand Gesture Recognition in Motion Picture",
    authors: "Yalda Foroutan, Ahmad Kalhor, Saeid Mohammadi Nejati, Samad Sheikhaei",
    paperUrl: "https://arxiv.org/pdf/2012.13188",
    tldr: "Controlling computer pointer using hand detection and gesture classification.",
  },
];

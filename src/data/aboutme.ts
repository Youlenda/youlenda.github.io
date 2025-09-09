export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Yalda Foroutan",
  title: "Ph.D. Student",
  institution: "Simon Fraser University (SFU)",
  // Note that links work in the description
  description:
    `I am a Ph.D. student at the <a href='https://gruvi.cs.sfu.ca/'>GrUVi lab</a>, supervised by Prof. <a href='https://theialab.ca/'>Andrea Tagliasacchi</a>. My research lies at the intersection of computer vision and computer graphics, with a focus on 3D reconstruction and novel view synthesis. I am particularly interested in Neural Radiance Fields (NeRF) and 3D Gaussian Splatting (3DGS).
    <br><br>
    Outside the lab, I enjoy Vancouver’s rare sunny days by exploring hiking trails. On rainy days, I unwind with jigsaw puzzles, board games, and crime movies.`,
  email: "yalda.foroutan@gmail.com",
  imageUrl:
    "/images/me.jpg",
  googleScholarUrl: "https://scholar.google.ca/citations?user=mkzIURcAAAAJ&hl=en",
  githubUsername: "youlenda",
  linkedinUsername: "yaldaforoutan",
  twitterUsername: "yaldaforoutan",
  // blogUrl: "https://",
  cvUrl: "https://github.com/Youlenda/youlenda/blob/main/Yalda_CV.pdf",
  institutionUrl: "https://www.sfu.ca",
  // altName: "",
  // secretDescription: "I like dogs.",
};

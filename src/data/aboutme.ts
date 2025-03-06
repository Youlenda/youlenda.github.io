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
    `I am a Ph.D. student at <a href='https://gruvi.cs.sfu.ca/'>GrUVi lab</a>, supervised by  <a href='https://theialab.ca/'>Andrea Tagliasacchi</a>. My research focuses on 3D reconstruction and novel view synthesis, especially Neural Radiance Fields (NeRF) and 3D Gaussian Splatting.
    <br><br>
    Beyond the lab, I enjoy Vancouver’s rare sunny days by exploring hiking trails. On rainy days, I solve jigsaw puzzles, play board games like Catan, and enjoy crime or historical movies.`,
  email: "yalda.foroutan@gmail.com",
  imageUrl:
    "/images/me.jpg",
  googleScholarUrl: "https://scholar.google.ca/citations?user=mkzIURcAAAAJ&hl=en",
  githubUsername: "youlenda",
  linkedinUsername: "yaldaforoutan",
  twitterUsername: "yaldaforoutan",
  // blogUrl: "https://",
  // cvUrl: "https://",
  institutionUrl: "https://www.sfu.ca",
  // altName: "",
  // secretDescription: "I like dogs.",
};

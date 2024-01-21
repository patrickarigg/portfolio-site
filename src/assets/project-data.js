import nc_news_img from "./project-images/nc-news.png";
import canon_img from "./project-images/canon.png";
import project_drowsy_img from "./project-images/project-drowsy.png";

export const projects = [
  {
    title: "Canon",
    subtitle: "React Native (Typescript), Supabase and OpenAI",
    description: "A social media app to create AI generated stories",
    image: canon_img,
    link: "https://github.com/patrickarigg/canon",
  },
  {
    title: "NC News",
    subtitle: "Express.js and React.js",
    description: "A news app",
    image: nc_news_img,
    link: "https://nc-news-prigg.netlify.app/",
  },
  {
    title: "Project Drowsy",
    subtitle: "Python, Tensorflow, Streamlit",
    description: "A computer vision project to detect driver drowsiness",
    image: project_drowsy_img,
    link: "https://github.com/patrickarigg/project_drowsy",
  },
];

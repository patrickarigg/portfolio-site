import profileImg from "../assets/profile-image.png";

function About() {
  return (
    <section id="about">
      <div id="about-content">
        <div>
          <img src={profileImg} alt="profile image" id="profile-image" />
        </div>
        <h1>Patrick Rigg</h1>
        <h2>Software Engineer</h2>
        <p>
          Hi, I'm Patrick, a Manufacturing Engineer turned Software Engineer! 👋
          👋
        </p>
        <p>
          I'm passionate about developing new skills so I can contribute to
          interesting projects and products. Check out some of my&nbsp;
          <span>
            <a href="#projects" id="project-link">
              recent projects
            </a>
          </span>
          &nbsp;below...
        </p>
      </div>
    </section>
  );
}

export default About;
